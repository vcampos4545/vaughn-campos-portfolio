import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectStatus = "active" | "completed" | "coming-soon";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  video?: string;
  appstore?: string;
}

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  year: string;
  heroImage: string;
  diagram: "orbit" | "wave" | "circuit" | "triangle" | "grid";
  links?: ProjectLinks;
  media: string[];
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function readProjectFile(fileName: string): Project {
  const filePath = path.join(PROJECTS_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = fileName.replace(/\.mdx?$/, "");

  return {
    slug,
    title: data.title,
    description: data.description,
    status: data.status ?? "active",
    featured: Boolean(data.featured),
    order: data.order ?? 0,
    year: data.year ?? "",
    heroImage: data.heroImage ?? "",
    diagram: data.diagram ?? "grid",
    links: data.links ?? {},
    media: data.media ?? [],
    content,
  };
}

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map(readProjectFile)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
