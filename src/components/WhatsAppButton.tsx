"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { useLocale } from "@/lib/i18n/LocaleContext";

const WHATSAPP_NUMBER = "243819862072";

export function WhatsAppButton() {
  const { locale } = useLocale();
  const message =
    locale === "fr"
      ? "Bonjour, je m'intéresse à vos propriétés."
      : "Hello, I'm interested in your properties.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
