"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AnimatedText, animatedTextDuration } from "@/components/AnimatedText";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/LocaleContext";

const TITLE_STAGGER = 0.03;
const TITLE_DELAY = 0.3;

export function AboutContent() {
  const { t } = useLocale();
  const taglineDelay = animatedTextDuration(t.about.title, TITLE_STAGGER, TITLE_DELAY) - 0.2;

  return (
    <main className="bg-[var(--bg)]">
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/about-bg.jpg"
          alt="Panorama Properties architectural blueprint"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50" />
        <Nav />
        <div className="relative px-8 pb-24 pt-8 text-center md:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.4em] text-[#d92b25]"
          >
            {t.about.eyebrow}
          </motion.p>
          <h1 className="mt-4 text-4xl font-light text-white md:text-5xl">
            <AnimatedText
              text={t.about.title}
              stagger={TITLE_STAGGER}
              delay={TITLE_DELAY}
              className="justify-center"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: taglineDelay }}
            className="mx-auto mt-4 max-w-xl text-sm text-white/50"
          >
            {t.about.intro}
          </motion.p>
        </div>
      </div>

      <section className="grid gap-8 px-8 py-16 md:grid-cols-2 md:px-16">
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8">
          <h2 className="text-sm font-medium tracking-widest text-[#d92b25]">
            {t.about.missionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
            {t.about.missionText}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8">
          <h2 className="text-sm font-medium tracking-widest text-[#d92b25]">
            {t.about.visionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
            {t.about.visionText}
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 md:px-16">
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8 md:p-12">
          <h2 className="text-sm font-medium tracking-widest text-[var(--text-primary)]">
            {t.about.contactTitle}
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-[#d92b25]" />
              <div>
                <p className="text-xs tracking-widest text-[var(--text-muted)]">
                  {t.about.addressLabel.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {t.about.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-[#d92b25]" />
              <div>
                <p className="text-xs tracking-widest text-[var(--text-muted)]">
                  {t.about.phoneLabel.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {t.about.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-[#d92b25]" />
              <div>
                <p className="text-xs tracking-widest text-[var(--text-muted)]">
                  {t.about.emailLabel.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {t.about.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
