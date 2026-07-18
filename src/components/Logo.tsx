"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const mark = (
  <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M12 40 L40 14 M22 40 L44 20 M32 40 L48 26" strokeWidth="3" />
    <path d="M40 14 L68 40" strokeWidth="3" />
    <path d="M10 40 L72 40" strokeWidth="3" />
    <path d="M68 12 L68 40 L80 40 L80 8 L68 8" strokeWidth="3" strokeLinejoin="round" />
    <path d="M50 40 L50 52" strokeWidth="3" />
  </svg>
);

const markPaths = [
  "M12 40 L40 14 M22 40 L44 20 M32 40 L48 26",
  "M40 14 L68 40",
  "M10 40 L72 40",
  "M68 12 L68 40 L80 40 L80 8 L68 8",
  "M50 40 L50 52",
];

function AnimatedMark() {
  return (
    <svg
      viewBox="0 0 100 70"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className="h-24 w-32"
    >
      {markPaths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          strokeWidth="3"
          strokeLinejoin={i === 3 ? "round" : undefined}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: i * 0.15,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </svg>
  );
}

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <div className="flex flex-col items-center text-[#d92b25]">
        <AnimatedMark />
        <div className="mt-4">
          <AnimatedText
            text="PANORAMA"
            stagger={0.06}
            delay={0.7}
            className="text-4xl font-light text-white md:text-5xl"
            style={{ letterSpacing: "0.35em" }}
          />
        </div>
        <div className="mt-2 flex items-center gap-3 text-sm font-medium tracking-[0.5em]">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
            className="h-px w-8 bg-[#d92b25]/60"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.55 }}
          >
            PROPERTIES
          </motion.span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="h-px w-8 bg-[#d92b25]/60"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-[#d92b25]">
      <div className="h-9 w-12">{mark}</div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-light tracking-[0.25em] text-white">
          PANORAMA
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.4em] text-[#d92b25]">
          PROPERTIES
        </span>
      </div>
    </div>
  );
}
