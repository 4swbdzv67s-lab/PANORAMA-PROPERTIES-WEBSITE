"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
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
        {/* Placeholder background — swap for the real hero photo in /public */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,#3a3f4a_0%,#15171b_45%,#050506_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.55))]" />
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full text-black/60"
          viewBox="0 0 1600 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <rect x="0" y="80" width="120" height="80" />
          <rect x="130" y="40" width="90" height="120" />
          <rect x="230" y="100" width="140" height="60" />
          <rect x="380" y="20" width="70" height="140" />
          <rect x="460" y="70" width="160" height="90" />
          <rect x="630" y="50" width="100" height="110" />
          <rect x="740" y="90" width="180" height="70" />
          <rect x="930" y="30" width="80" height="130" />
          <rect x="1020" y="75" width="150" height="85" />
          <rect x="1180" y="55" width="100" height="105" />
          <rect x="1290" y="95" width="140" height="65" />
          <rect x="1440" y="35" width="90" height="125" />
          <rect x="1540" y="85" width="60" height="75" />
        </svg>

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
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/developments/${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#3d3d3d] to-[#141414] transition hover:border-[#d92b25]/50"
            >
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                <h3 className="text-xl font-medium text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {project.tagline}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
