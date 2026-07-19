"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GalleryScroll } from "@/components/GalleryScroll";
import { AnimatedText, animatedTextDuration } from "@/components/AnimatedText";
import { ArrowIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import type { Project } from "@/lib/projects";
import type { GalleryImage } from "@/lib/golf-kabulameshi-gallery";

const TITLE_STAGGER = 0.035;
const TITLE_DELAY = 0.35;

type Props = {
  project: Project;
  galleryDay: GalleryImage[] | null;
  galleryNight: GalleryImage[] | null;
  plans: (GalleryImage & { label: string })[] | null;
};

export function ProjectDetail({ project, galleryDay, galleryNight, plans }: Props) {
  const { locale, t } = useLocale();
  const { theme } = useTheme();

  const tagline = locale === "fr" ? project.fr.tagline : project.tagline;
  const description = locale === "fr" ? project.fr.description : project.description;
  const highlights = locale === "fr" ? project.fr.highlights : project.highlights;
  const statusLabel =
    project.status === "Now Selling" ? t.developments.nowSelling : t.developments.comingSoon;
  const heroImage =
    theme === "night" ? project.heroImageNight ?? project.heroImage : project.heroImage;
  const gallery =
    theme === "night" ? galleryNight ?? galleryDay : galleryDay ?? galleryNight;

  return (
    <main className="bg-[var(--bg)]">
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        {heroImage ? (
          <>
            <Image
              key={heroImage}
              src={heroImage}
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
          <motion.a
            key={`crumb-${project.slug}`}
            href="/developments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs tracking-widest text-white/50 transition hover:text-white"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            {t.developments.allDevelopments}
          </motion.a>
          <motion.span
            key={`badge-${project.slug}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`mt-8 inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-widest ${
              project.status === "Now Selling"
                ? "bg-[#d92b25] text-white"
                : "border border-white/30 text-white/70"
            }`}
          >
            {statusLabel}
          </motion.span>
          <h1 className="mt-4 text-4xl font-light text-white md:text-6xl">
            <AnimatedText
              key={`title-${project.slug}`}
              text={project.name}
              stagger={TITLE_STAGGER}
              delay={TITLE_DELAY}
            />
          </h1>
          <motion.p
            key={`tagline-${project.slug}-${locale}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: animatedTextDuration(project.name, TITLE_STAGGER, TITLE_DELAY) - 0.2,
            }}
            className="mt-3 text-lg text-white/50"
          >
            {tagline}
          </motion.p>
        </div>
      </div>

      <section className="grid gap-12 px-8 py-16 md:grid-cols-3 md:px-16">
        <div className="md:col-span-2">
          {heroImage ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--border-color)]">
              <Image
                key={heroImage}
                src={heroImage}
                alt={`${project.name} overview`}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--card-from)] to-[var(--card-to)]" />
          )}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-widest text-[var(--text-primary)]">
            {t.developments.highlights}
          </h2>
          <ul className="mt-4 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d92b25]" />
                {highlight}
              </li>
            ))}
          </ul>
          <a
            href={`/contact?project=${project.slug}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d92b25]/70 bg-black/30 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#d92b25]"
          >
            {t.developments.enquireNow}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section id="gallery" className="scroll-mt-24">
          <h2 className="px-8 text-sm font-medium tracking-widest text-[var(--text-primary)] md:px-16">
            {t.developments.gallery}
          </h2>
          <p className="mt-2 px-8 text-xs text-[var(--text-muted)] md:px-16">
            {t.developments.scrollToExplore}
          </p>
          <div className="mt-6">
            <GalleryScroll slides={gallery} />
          </div>
        </section>
      )}

      {plans && (
        <section className="px-8 py-16 md:px-16">
          <h2 className="text-sm font-medium tracking-widest text-[var(--text-primary)]">
            {t.developments.siteAndMasterplan}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white">
                  <Image
                    src={plan.src}
                    alt={plan.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{plan.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
