"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowIcon } from "./icons";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import type { Project } from "@/lib/projects";

export function DevelopmentsShowcase({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const playing = !isHovering && !userPaused;
  const project = projects[index];
  const { locale, t } = useLocale();
  const { theme } = useTheme();

  const tagline = locale === "fr" ? project.fr.tagline : project.tagline;
  const statusLabel =
    project.status === "Now Selling" ? t.developments.nowSelling : t.developments.comingSoon;
  const image =
    theme === "night"
      ? project.heroImageNight ?? project.heroImage
      : project.heroImage;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % projects.length),
      5000,
    );
    return () => clearInterval(id);
  }, [playing, projects.length]);

  const goTo = (i: number) => {
    setIndex(i);
    setUserPaused(true);
  };
  const next = () => goTo((index + 1) % projects.length);
  const prev = () => goTo((index - 1 + projects.length) % projects.length);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={`${project.slug}-${theme}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {image ? (
            <Image
              src={image}
              alt={project.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-from)] to-[var(--card-to)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`scan-${project.slug}-${theme}`}
        initial={{ x: "-100%", opacity: 0.8 }}
        animate={{ x: "200%", opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#d92b25]/40 to-transparent"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
        <div className="flex items-start justify-between">
          <span className="font-mono text-5xl font-light text-white/20 md:text-7xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-widest ${
              project.status === "Now Selling"
                ? "bg-[#d92b25] text-white"
                : "border border-white/30 text-white/70"
            }`}
          >
            {statusLabel}
          </span>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${project.slug}-${locale}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-light text-white md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-white/60 md:text-base">
                {tagline}
              </p>
              <a
                href={`/developments/${project.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d92b25]/70 bg-black/30 px-6 py-2.5 text-xs font-medium tracking-widest text-white transition hover:bg-[#d92b25]"
              >
                {t.developments.viewDevelopment}
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-5 overflow-x-auto">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => goTo(i)}
                className="group flex shrink-0 flex-col gap-2 text-left"
              >
                <span
                  className={`text-[10px] tracking-widest transition md:text-xs ${
                    i === index
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} {p.name.toUpperCase()}
                </span>
                <span className="relative h-0.5 w-14 overflow-hidden rounded-full bg-white/15 md:w-20">
                  {i === index && (
                    <motion.span
                      key={project.slug}
                      className="absolute inset-y-0 left-0 bg-[#d92b25]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: playing ? 5 : 0.3,
                        ease: "linear",
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous development"
        className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:border-white md:flex"
      >
        <ArrowIcon className="h-4 w-4 rotate-180" />
      </button>
      <button
        onClick={next}
        aria-label="Next development"
        className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:border-white md:flex"
      >
        <ArrowIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
