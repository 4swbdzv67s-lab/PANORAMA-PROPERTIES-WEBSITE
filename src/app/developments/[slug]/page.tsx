import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GalleryScroll } from "@/components/GalleryScroll";
import { projects } from "@/lib/projects";
import { ArrowIcon } from "@/components/icons";
import {
  renders as golfKabulameshiRenders,
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

  const gallery = slug === "golf-kabulameshi" ? golfKabulameshiRenders : null;
  const plans = slug === "golf-kabulameshi" ? golfKabulameshiPlans : null;

  return (
    <main className="bg-black">
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        {project.heroImage ? (
          <>
            <Image
              src={project.heroImage}
              alt={`${project.name} aerial view`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#2a2f38_0%,#0f1013_50%,#050506_100%)]" />
        )}
        <Nav />
        <div className="relative px-8 pb-24 pt-4 md:px-16">
          <a
            href="/developments"
            className="inline-flex items-center gap-2 text-xs tracking-widest text-white/50 transition hover:text-white"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            ALL DEVELOPMENTS
          </a>
          <span
            className={`mt-8 inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-widest ${
              project.status === "Now Selling"
                ? "bg-[#d92b25] text-white"
                : "border border-white/30 text-white/70"
            }`}
          >
            {project.status.toUpperCase()}
          </span>
          <h1 className="mt-4 text-4xl font-light text-white md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-3 text-lg text-white/50">{project.tagline}</p>
        </div>
      </div>

      <section className="grid gap-12 px-8 py-16 md:grid-cols-3 md:px-16">
        <div className="md:col-span-2">
          {project.heroImage ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={project.heroImage}
                alt={`${project.name} overview`}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-[#3d3d3d] to-[#141414]" />
          )}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60">
            {project.description}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-widest text-white">
            HIGHLIGHTS
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d92b25]" />
                {highlight}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d92b25]/70 bg-black/30 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#d92b25]"
          >
            ENQUIRE NOW
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      {gallery && (
        <section>
          <h2 className="px-8 text-sm font-medium tracking-widest text-white md:px-16">
            GALLERY
          </h2>
          <p className="mt-2 px-8 text-xs text-white/40 md:px-16">
            Scroll to explore
          </p>
          <div className="mt-6">
            <GalleryScroll slides={gallery} />
          </div>
        </section>
      )}

      {plans && (
        <section className="px-8 py-16 md:px-16">
          <h2 className="text-sm font-medium tracking-widest text-white">
            SITE &amp; MASTERPLAN
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src={plan.src}
                    alt={plan.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-white/60">{plan.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
