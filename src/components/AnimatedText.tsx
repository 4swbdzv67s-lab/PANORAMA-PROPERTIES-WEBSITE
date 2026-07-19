"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties } from "react";

const container: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delayChildren,
    },
  }),
};

const letter: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AnimatedText({
  text,
  className,
  style,
  stagger = 0.045,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.span
      custom={{ stagger, delayChildren: delay }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className ?? ""}`}
      style={style}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function animatedTextDuration(text: string, stagger = 0.045, delay = 0) {
  return delay + text.length * stagger + 0.6;
}
