import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/projects";
import {
  rendersDay as golfKabulameshiRendersDay,
  rendersNight as golfKabulameshiRendersNight,
  plans as golfKabulameshiPlans,
} from "@/lib/golf-kabulameshi-gallery";

type Props = { params: Promise<{ slug: string }> };

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

  const isGolfKabulameshi = slug === "golf-kabulameshi";

  return (
    <ProjectDetail
      project={project}
      galleryDay={isGolfKabulameshi ? golfKabulameshiRendersDay : null}
      galleryNight={isGolfKabulameshi ? golfKabulameshiRendersNight : null}
      plans={isGolfKabulameshi ? golfKabulameshiPlans : null}
    />
  );
}
