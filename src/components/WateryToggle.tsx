"use client";

import { motion } from "framer-motion";
import { KeyIcon, TagIcon } from "./icons";

export type ListingMode = "rent" | "sale";

export function WateryToggle({
  mode,
  onChange,
  rentLabel,
  saleLabel,
}: {
  mode: ListingMode;
  onChange: (mode: ListingMode) => void;
  rentLabel: string;
  saleLabel: string;
}) {
  const options: { key: ListingMode; label: string; icon: typeof KeyIcon }[] = [
    { key: "rent", label: rentLabel, icon: KeyIcon },
    { key: "sale", label: saleLabel, icon: TagIcon },
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-sm items-center rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] p-1.5">
      <svg width="0" height="0" className="absolute">
        <filter id="watery-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
          />
        </filter>
      </svg>

      <div className="relative flex w-full" style={{ filter: "url(#watery-goo)" }}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="absolute inset-y-0 w-1/2 rounded-full bg-[#d92b25]"
          style={{ left: mode === "rent" ? "0%" : "50%" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            x: mode === "rent" ? [0, 14, 0] : [0, -14, 0],
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          key={mode}
          className="pointer-events-none absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#d92b25]"
          style={{ left: mode === "rent" ? "42%" : "auto", right: mode === "sale" ? "42%" : "auto" }}
        />
      </div>

      {options.map((opt) => {
        const isActive = mode === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className="relative z-10 flex w-1/2 items-center justify-center gap-2 rounded-full py-2.5 text-xs font-medium tracking-widest transition-colors"
          >
            <opt.icon
              className={`h-4 w-4 transition-colors ${
                isActive ? "text-white" : "text-[var(--text-muted)]"
              }`}
            />
            <span className={isActive ? "text-white" : "text-[var(--text-muted)]"}>
              {opt.label.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
}
