"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const ICON_SRC = "/images/logo-icon.png";
const ICON_WIDTH = 533;
const ICON_HEIGHT = 260;

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <div className="flex flex-col items-center text-[#d92b25]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <Image
            src={ICON_SRC}
            alt="Panorama Properties"
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            priority
            className="h-16 w-auto md:h-20"
          />
        </motion.div>
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
      <Image
        src={ICON_SRC}
        alt="Panorama Properties"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        className="h-9 w-auto"
      />
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
