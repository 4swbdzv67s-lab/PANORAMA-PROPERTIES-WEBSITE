"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg)] px-8 py-10 text-center text-xs tracking-wide text-[var(--text-muted)] md:px-16">
      <div className="flex items-center justify-center gap-4">
        <a href="/privacy-policy" className="transition hover:text-[var(--text-secondary)]">
          {t.footer.privacyPolicy}
        </a>
        <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
        <a href="/terms-of-use" className="transition hover:text-[var(--text-secondary)]">
          {t.footer.termsOfUse}
        </a>
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} Panorama Properties. {t.footer.rights}
      </p>
    </footer>
  );
}
