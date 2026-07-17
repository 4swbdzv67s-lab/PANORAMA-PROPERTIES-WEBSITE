"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import { ArrowIcon } from "@/components/icons";

export default function Developments() {
  return (
    <main className="bg-black">
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#2a2f38_0%,#0f1013_50%,#050506_100%)]" />
        <Nav />
        <div className="relative px-8 pb-20 pt-8 text-center md:px-16">
          <p className="text-xs tracking-[0.4em] text-[#d92b25]">
            OUR PORTFOLIO
          </p>
          <h1 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Developments
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/50">
            Every Panorama development is built around the same idea:
            architecture that respects how people actually want to live.
          </p>
        </div>
      </div>

      <section className="px-8 py-16 md:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/developments/${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#d92b25]/50"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#3d3d3d] to-[#141414]">
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium tracking-widest ${
                    project.status === "Now Selling"
                      ? "bg-[#d92b25] text-white"
                      : "border border-white/30 bg-black/40 text-white/70"
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
              </div>
              <div className="bg-[#0d0d0d] p-6">
                <h3 className="text-xl font-medium text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#d92b25]">
                  VIEW DEVELOPMENT
                  <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
