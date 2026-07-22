import Link from "next/link";
import { ArrowRight, SquareCode, Link2, FileText } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

const DOMAINS = [
  "Orbital Mechanics",
  "Attitude Control",
  "Embedded Systems",
  "Applied AI",
  "Full-Stack Web",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <FadeIn>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Engineering Log &mdash; Est. 2026
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Vaughn Campos
          </h1>

          <p className="mt-4 font-mono text-base text-muted sm:text-lg">
            {site.role}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {site.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={14} />
            </Link>
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FileText size={14} />
              Resume
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <SquareCode size={14} />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Link2 size={14} />
              LinkedIn
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-16 flex flex-wrap gap-2 border-t border-border pt-8">
            {DOMAINS.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted"
              >
                {domain}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <FadeIn>
          <SectionHeading
            index="01"
            label="Featured Work"
            title="Selected projects"
            description="A mix of simulation, embedded control, and applied AI work — spanning spacecraft dynamics to production software."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80}>
              <ProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:text-foreground"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
