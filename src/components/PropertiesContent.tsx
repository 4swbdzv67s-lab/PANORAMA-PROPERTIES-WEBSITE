"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AnimatedText, animatedTextDuration } from "@/components/AnimatedText";
import { WateryToggle, type ListingMode } from "@/components/WateryToggle";
import { ArrowIcon, KeyIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import { projects } from "@/lib/projects";

const TITLE_STAGGER = 0.04;
const TITLE_DELAY = 0.3;

export function PropertiesContent() {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const isDay = theme === "day";
  const taglineDelay = animatedTextDuration(t.properties.title, TITLE_STAGGER, TITLE_DELAY) - 0.2;

  const [mode, setMode] = useState<ListingMode>("sale");

  return (
    <main className="bg-[var(--bg)]">
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        <Image
          src={isDay ? "/images/about-bg-day.jpg" : "/images/about-bg.jpg"}
          alt="Panorama Properties architectural sketch"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className={
            isDay
              ? "absolute inset-0 bg-white/55"
              : "absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50"
          }
        />
        {isDay && (
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent" />
        )}
        <Nav />
        <div className="relative px-8 pb-16 pt-8 text-center md:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.4em] text-[#d92b25]"
          >
            {t.properties.eyebrow}
          </motion.p>
          <h1 className="mt-4 text-4xl font-light text-[var(--text-primary)] md:text-5xl">
            <AnimatedText
              text={t.properties.title}
              stagger={TITLE_STAGGER}
              delay={TITLE_DELAY}
              className="justify-center"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: taglineDelay }}
            className="mx-auto mt-4 max-w-2xl text-sm text-[var(--text-secondary)]"
          >
            {t.properties.intro}
          </motion.p>
        </div>
      </div>

      <section className="px-8 py-16 md:px-16">
        <WateryToggle
          mode={mode}
          onChange={setMode}
          rentLabel={t.properties.forRent}
          saleLabel={t.properties.forSale}
        />

        <AnimatePresence mode="wait">
          {mode === "sale" ? (
            <motion.div
              key="sale"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="mt-12 grid gap-8 md:grid-cols-2"
            >
              {projects.map((project) => {
                const tagline = locale === "fr" ? project.fr.tagline : project.tagline;
                const statusLabel =
                  project.status === "Now Selling"
                    ? t.developments.nowSelling
                    : t.developments.comingSoon;
                return (
                  <a
                    key={project.slug}
                    href={`/developments/${project.slug}#gallery`}
                    className="group block overflow-hidden rounded-2xl border border-[var(--border-color)] transition hover:border-[#d92b25]/50"
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-[var(--card-from)] to-[var(--card-to)]">
                      {project.heroImage && (
                        <Image
                          src={project.heroImage}
                          alt={project.name}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium tracking-widest ${
                          project.status === "Now Selling"
                            ? "bg-[#d92b25] text-white"
                            : "border border-white/30 bg-black/40 text-white/70"
                        }`}
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <div className="bg-[var(--bg-elevated)] p-6">
                      <h3 className="text-xl font-medium text-[var(--text-primary)]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#d92b25]">
                        {t.properties.siteWalkthrough}
                        <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="rent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="mt-16 flex flex-col items-center px-6 py-16 text-center"
            >
              <KeyIcon className="h-10 w-10 text-[var(--text-muted)]" />
              <h2 className="mt-6 text-xl font-light text-[var(--text-primary)]">
                {t.properties.rentEmptyTitle}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">
                {t.properties.rentEmptyText}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#d92b25]/70 bg-black/30 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#d92b25]"
              >
                {t.developments.enquireNow}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
