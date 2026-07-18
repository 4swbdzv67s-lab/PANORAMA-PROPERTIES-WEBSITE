"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { PageTransition } from "./PageTransition";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <PageTransition>{children}</PageTransition>
      </LocaleProvider>
    </ThemeProvider>
  );
}
