"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { legalContent } from "@/lib/legal-content";

export function LegalPageContent({ doc }: { doc: "privacy" | "terms" }) {
  const { locale } = useLocale();
  const content = legalContent[locale][doc];

  return (
    <main className="bg-[var(--bg)]">
      <div className="bg-[#0a0a0a]">
        <Nav />
      </div>
      <section className="mx-auto max-w-3xl px-8 py-16 md:px-16">
        <h1 className="text-3xl font-light text-[var(--text-primary)] md:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-xs tracking-widest text-[var(--text-muted)]">
          {content.updated}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-[var(--text-secondary)]">
          {content.intro}
        </p>
        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-sm font-medium tracking-widest text-[var(--text-primary)]">
                {section.heading.toUpperCase()}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
