"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { PageTransition } from "./PageTransition";
import { WhatsAppButton } from "./WhatsAppButton";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <PageTransition>{children}</PageTransition>
        <WhatsAppButton />
      </LocaleProvider>
    </ThemeProvider>
  );
}
