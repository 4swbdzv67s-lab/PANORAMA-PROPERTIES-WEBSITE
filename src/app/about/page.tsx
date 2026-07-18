import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Panorama Properties",
  description:
    "Learn about Panorama Properties' mission, vision, and how to get in touch.",
};

export default function AboutPage() {
  return <AboutContent />;
}
