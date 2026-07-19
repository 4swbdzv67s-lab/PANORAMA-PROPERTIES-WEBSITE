import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE_URL = "https://panorama-properties.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/properties",
    "/developments",
    "/commercial",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/developments/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
