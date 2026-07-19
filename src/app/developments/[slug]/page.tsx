import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/projects";
import type { GalleryImage } from "@/lib/golf-kabulameshi-gallery";
import {
  rendersDay as golfKabulameshiRendersDay,
  rendersNight as golfKabulameshiRendersNight,
  plans as golfKabulameshiPlans,
} from "@/lib/golf-kabulameshi-gallery";
import { renders as malaikaRenders } from "@/lib/malaika-gallery";
import { renders as amethysteRenders } from "@/lib/amethyste-gallery";
import { renders as hewaBoraRenders } from "@/lib/hewa-bora-gallery";

type Props = { params: Promise<{ slug: string }> };

type GalleryEntry = {
  galleryDay: GalleryImage[] | null;
  galleryNight: GalleryImage[] | null;
  plans: (GalleryImage & { label: string })[] | null;
};

const galleryBySlug: Record<string, GalleryEntry> = {
  "golf-kabulameshi": {
    galleryDay: golfKabulameshiRendersDay,
    galleryNight: golfKabulameshiRendersNight,
    plans: golfKabulameshiPlans,
  },
  malaika: {
    // Same renders regardless of theme — Malaika only has day-lit shots.
    galleryDay: malaikaRenders,
    galleryNight: malaikaRenders,
    plans: null,
  },
  amethyste: {
    // Same renders regardless of theme — Amethyste only has day/rain-lit shots.
    galleryDay: amethysteRenders,
    galleryNight: amethysteRenders,
    plans: null,
  },
  "hewa-bora": {
    galleryDay: hewaBoraRenders,
    galleryNight: hewaBoraRenders,
    plans: null,
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Panorama Properties`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const gallery = galleryBySlug[slug] ?? {
    galleryDay: null,
    galleryNight: null,
    plans: null,
  };

  return (
    <ProjectDetail
      project={project}
      galleryDay={gallery.galleryDay}
      galleryNight={gallery.galleryNight}
      plans={gallery.plans}
    />
  );
}
