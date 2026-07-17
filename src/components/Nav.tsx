"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import {
  MenuIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./icons";

const links = [
  { label: "HOME", href: "/" },
  { label: "PROPERTIES", href: "#" },
  { label: "DEVELOPMENTS", href: "/developments" },
  { label: "SERVICES", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "CONTACT", href: "#" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-30 flex items-center justify-between px-8 py-6 md:px-12">
      <a href="/" onClick={() => setOpen(false)}>
        <Logo size="sm" />
      </a>

      <div className="hidden items-center gap-8 text-xs font-medium tracking-widest text-white/70 lg:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`relative pb-1 transition hover:text-white ${
              pathname === link.href
                ? "text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#d92b25]"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-1 rounded-full border border-[#d92b25]/40 p-1 text-xs sm:flex">
          <button className="rounded-full border border-[#d92b25] px-3 py-1 text-white">
            EN
          </button>
          <span className="text-white/20">|</span>
          <button className="px-3 py-1 text-white/50 transition hover:text-white">
            FR
          </button>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white"
        >
          {open ? (
            <CloseIcon className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black/97 backdrop-blur-sm"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`text-2xl font-light tracking-widest transition hover:text-[#d92b25] ${
                  pathname === link.href ? "text-[#d92b25]" : "text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="mt-4 flex items-center gap-1 rounded-full border border-[#d92b25]/40 p-1 text-xs sm:hidden">
              <button className="rounded-full border border-[#d92b25] px-3 py-1 text-white">
                EN
              </button>
              <span className="text-white/20">|</span>
              <button className="px-3 py-1 text-white/50">FR</button>
            </div>

            <div className="mt-4 flex items-center gap-6 text-white/60">
              <a href="#" aria-label="Facebook" className="transition hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:text-white">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
