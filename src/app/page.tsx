"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { DevelopmentsShowcase } from "@/components/DevelopmentsShowcase";
import { projects } from "@/lib/projects";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PlayIcon,
  ArrowIcon,
  MouseIcon,
  DiamondIcon,
  MapPinIcon,
  SofaIcon,
  ShieldIcon,
} from "@/components/icons";

const features = [
  {
    icon: DiamondIcon,
    title: "Luxury Living",
    description: "Exceptional homes designed for elite lifestyles.",
  },
  {
    icon: MapPinIcon,
    title: "Prime Locations",
    description: "Carefully selected locations with maximum value.",
  },
  {
    icon: SofaIcon,
    title: "Modern Design",
    description: "Architectural excellence blending comfort and elegance.",
  },
  {
    icon: ShieldIcon,
    title: "Trust & Security",
    description: "Safe investments with transparent process and legal security.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/homepage-hero-bg.jpg"
          alt="Panorama Properties development at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.6))]" />

        <Nav />

        <div className="relative flex flex-1 items-center justify-center px-6">
          <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 text-white/60 xl:flex">
            <a href="#" aria-label="Facebook" className="transition hover:text-white">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-white">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <span className="h-16 w-px bg-white/20" />
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <Logo size="lg" />
            <p className="mt-4 text-[11px] tracking-[0.5em] text-white/40">
              VOTRE PARTENAIRE IMMOBILIER
            </p>
            <a
              href="#projects"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d92b25]/70 bg-black/30 px-8 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#d92b25]"
            >
              START EXPERIENCE
              <ArrowIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="absolute right-8 top-1/2 hidden w-44 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm xl:block">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-widest text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d92b25]" />
              <span className="leading-tight text-left">
                DISCOVER
                <br />
                LUXURY
                <br />
                WITHOUT LIMITS
              </span>
            </div>
            <button
              aria-label="Watch video"
              className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-[#d92b25] hover:text-[#d92b25]"
            >
              <PlayIcon className="h-4 w-4" />
            </button>
            <p className="mt-3 text-[10px] tracking-widest text-white/50">
              WATCH VIDEO
            </p>
            <div className="mt-4 flex justify-center gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === 0 ? "bg-[#d92b25]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-4 pb-8 text-white/40">
          <span className="h-px w-16 bg-white/20" />
          <span className="text-[10px] tracking-[0.3em]">SCROLL TO EXPLORE</span>
          <MouseIcon className="h-6 w-4" />
          <span className="h-px w-16 bg-white/20" />
        </div>

        <div className="relative z-10 grid grid-cols-2 border-t border-white/10 bg-black/70 backdrop-blur-sm md:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 border-b border-white/10 px-6 py-5 md:border-b-0 md:border-r"
            >
              <feature.icon className="h-8 w-8 shrink-0 text-white/70" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-white">
                  {feature.title.toUpperCase()}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          <a
            href="#projects"
            className="col-span-2 flex items-center justify-center gap-3 bg-[#d92b25] px-6 py-5 text-sm font-medium tracking-wide text-white transition hover:bg-[#c02420] md:col-span-1"
          >
            VIEW ALL PROPERTIES
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="projects" className="bg-black px-8 py-24 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-light text-white md:text-4xl"
        >
          Our Developments
        </motion.h2>
        <DevelopmentsShowcase projects={projects} />
      </section>

      <Footer />
    </main>
  );
}
