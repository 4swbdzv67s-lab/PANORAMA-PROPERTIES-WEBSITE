"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { GalleryImage } from "@/lib/golf-kabulameshi-gallery";

gsap.registerPlugin(ScrollTrigger);

export function GalleryScroll({ slides }: { slides: GalleryImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const ctx = gsap.context(() => {
      const getTotalScroll = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getTotalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getTotalScroll()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      <div
        ref={trackRef}
        className="flex h-[60vh] w-max items-center gap-4 px-8 md:h-[70vh] md:px-16"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src + i}
            className="relative h-[85%] w-[75vw] shrink-0 overflow-hidden rounded-2xl border border-white/10 md:w-[42vw]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 768px) 42vw, 75vw"
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
