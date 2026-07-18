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
        className="flex h-[65vh] w-max items-stretch md:h-[85vh]"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src + i}
            className="relative h-full shrink-0"
            style={{ aspectRatio: `${slide.width} / ${slide.height}` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vh"
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
