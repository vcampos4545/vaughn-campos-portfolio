import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
