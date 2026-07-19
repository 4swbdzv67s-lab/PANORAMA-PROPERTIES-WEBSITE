"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AnimatedText, animatedTextDuration } from "@/components/AnimatedText";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  ArrowIcon,
} from "@/components/icons";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import { projects } from "@/lib/projects";

const FACEBOOK_URL = "https://www.facebook.com/p/Panorama-Properties-100054321169125/";
const INSTAGRAM_URL = "https://www.instagram.com/panoramapropertiescongo/";

const TITLE_STAGGER = 0.04;
const TITLE_DELAY = 0.3;

export function ContactContent() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const isDay = theme === "day";
  const taglineDelay = animatedTextDuration(t.contact.title, TITLE_STAGGER, TITLE_DELAY) - 0.2;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectSlug = params.get("project");
    if (projectSlug && projects.some((p) => p.slug === projectSlug)) {
      setProject(projectSlug);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectName = projects.find((p) => p.slug === project)?.name;
    const subject = projectName
      ? `Enquiry: ${projectName}`
      : "Enquiry from panoramaproperties.com";
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      projectName ? `Development: ${projectName}` : null,
      "",
      message,
    ].filter((line) => line !== null);
    const mailto = `mailto:${t.about.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

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
        <div className="relative px-8 pb-24 pt-8 text-center md:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.4em] text-[#d92b25]"
          >
            {t.contact.eyebrow}
          </motion.p>
          <h1 className="mt-4 text-4xl font-light text-[var(--text-primary)] md:text-5xl">
            <AnimatedText
              text={t.contact.title}
              stagger={TITLE_STAGGER}
              delay={TITLE_DELAY}
              className="justify-center"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: taglineDelay }}
            className="mx-auto mt-4 max-w-xl text-sm text-[var(--text-secondary)]"
          >
            {t.contact.intro}
          </motion.p>
        </div>
      </div>

      <section className="grid gap-8 px-8 py-16 md:grid-cols-3 md:px-16">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8 md:col-span-2"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs tracking-widest text-[var(--text-muted)]">
              {t.contact.formName.toUpperCase()}
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[#d92b25]"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs tracking-widest text-[var(--text-muted)]">
              {t.contact.formEmail.toUpperCase()}
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[#d92b25]"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs tracking-widest text-[var(--text-muted)]">
              {t.contact.formPhone.toUpperCase()}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-lg border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[#d92b25]"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs tracking-widest text-[var(--text-muted)]">
              {t.contact.formProject.toUpperCase()}
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[#d92b25]"
              >
                <option value="">{t.contact.formProjectNone}</option>
                {projects.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-6 flex flex-col gap-2 text-xs tracking-widest text-[var(--text-muted)]">
            {t.contact.formMessage.toUpperCase()}
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.formMessagePlaceholder}
              className="resize-none rounded-lg border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[#d92b25]"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#d92b25]/70 bg-black/30 px-8 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#d92b25]"
          >
            {t.contact.formSubmit}
            <ArrowIcon className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-[var(--text-muted)]">{t.contact.formNote}</p>
        </form>

        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8">
          <h2 className="text-sm font-medium tracking-widest text-[var(--text-primary)]">
            {t.contact.detailsTitle}
          </h2>
          <div className="mt-6 space-y-6">
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
                  <br />
                  {t.about.phoneSecondary}
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
          <div className="mt-8 flex items-center gap-4 border-t border-[var(--border-color)] pt-6">
            <p className="text-xs tracking-widest text-[var(--text-muted)]">
              {t.about.socialTitle.toUpperCase()}
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[var(--text-secondary)] transition hover:text-[#d92b25]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--text-secondary)] transition hover:text-[#d92b25]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
