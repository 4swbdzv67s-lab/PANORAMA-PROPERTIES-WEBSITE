"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import type { Locale } from "@/lib/i18n/translations";
import {
  MenuIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./icons";

const linkKeys = [
  { key: "home", href: "/" },
  { key: "properties", href: "/properties" },
  { key: "developments", href: "/developments" },
  { key: "commercial", href: "/commercial" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const links = linkKeys.map((link) => ({
    ...link,
    label: t.nav[link.key],
  }));

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 rounded-full border border-[#d92b25]/40 p-1 text-xs ${className}`}>
      {(["en", "fr"] as Locale[]).map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-white/20">|</span>}
          <button
            onClick={() => setLocale(code)}
            className={
              locale === code
                ? "rounded-full border border-[#d92b25] px-3 py-1 text-white"
                : "px-3 py-1 text-white/50 transition hover:text-white"
            }
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <nav className="relative z-30 flex items-center justify-between px-8 py-6 md:px-12">
      <a href="/" onClick={() => setOpen(false)}>
        <Logo size="sm" />
      </a>

      <div className="hidden items-center gap-8 text-xs font-medium tracking-widest text-white/70 lg:flex">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={`relative pb-1 transition hover:text-white ${
              pathname === link.href
                ? "text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#d92b25]"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label={theme === "night" ? "Switch to day mode" : "Switch to night mode"}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white sm:flex"
        >
          {theme === "night" ? (
            <MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )}
        </button>
        <LanguageToggle className="hidden sm:flex" />
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white"
        >
          {open ? (
            <CloseIcon className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black/97 backdrop-blur-sm"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`text-2xl font-light tracking-widest transition hover:text-[#d92b25] ${
                  pathname === link.href ? "text-[#d92b25]" : "text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-4 flex items-center gap-2 text-xs tracking-widest text-white/60 transition hover:text-white"
            >
              {theme === "night" ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
              {theme === "night" ? t.theme.day : t.theme.night}
            </button>

            <LanguageToggle className="mt-2" />

            <div className="mt-4 flex items-center gap-6 text-white/60">
              <a
                href="https://www.facebook.com/p/Panorama-Properties-100054321169125/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/panoramapropertiescongo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
