"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";

// Mirrors the nav order (Home, Properties, Developments, About, Contact) so
// navigating between pages animates like scrolling down/up through one site.
const PAGE_ORDER: Record<string, number> = {
  "/": 0,
  "/properties": 1,
  "/developments": 2,
  "/about": 3,
  "/contact": 4,
};

function orderFor(pathname: string): number | null {
  if (pathname in PAGE_ORDER) return PAGE_ORDER[pathname];
  if (pathname.startsWith("/developments/")) return 2.5;
  return null;
}

const scrollVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? 56 : -56,
  }),
  animate: { opacity: 1, y: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? -56 : 56,
  }),
};

const fadeVariants = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.05, filter: "blur(6px)" },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevOrderRef = useRef<number | null>(null);
  const currentOrder = orderFor(pathname);

  const knownTransition =
    prevOrderRef.current !== null &&
    currentOrder !== null &&
    prevOrderRef.current !== currentOrder;
  const direction = knownTransition
    ? Math.sign(currentOrder! - prevOrderRef.current!)
    : 0;

  prevOrderRef.current = currentOrder;

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={currentOrder !== null ? scrollVariants : fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
