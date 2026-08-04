import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, SquareCode, ExternalLink, PlayCircle, Smartphone } from "lucide-react";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx-components";
import { StatusBadge } from "@/components/StatusBadge";
import { Tag } from "@/components/Tag";
import { FadeIn } from "@/components/FadeIn";
import { MediaGallery } from "@/components/MediaGallery";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {project.year && (
            <span className="font-mono text-xs text-muted-2">{project.year}</span>
          )}
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {project.links &&
          (project.links.github ||
            project.links.demo ||
            project.links.video ||
            project.links.appstore) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <SquareCode size={14} />
                Source
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <PlayCircle size={14} />
                Video
              </a>
            )}
            {project.links.appstore && (
              <a
                href={project.links.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Smartphone size={14} />
                App Store
              </a>
            )}
          </div>
        )}

        {project.media.length > 0 && <MediaGallery media={project.media} />}
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mt-12">
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>
      </FadeIn>
    </article>
  );
}
