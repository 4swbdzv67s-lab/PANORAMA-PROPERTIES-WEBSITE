"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg)] px-8 py-10 text-center text-xs tracking-wide text-[var(--text-muted)] md:px-16">
      &copy; {new Date().getFullYear()} Panorama Properties. {t.footer.rights}
    </footer>
  );
}
