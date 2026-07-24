import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";
import { StatusBadge } from "./StatusBadge";
import { Tag } from "./Tag";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isComingSoon = project.status === "coming-soon";
  const code = String(index + 1).padStart(2, "0");

  const card = (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-strong">
      <ProjectVisual
        code={code}
        title={project.title}
        diagram={project.diagram}
        heroImage={project.heroImage || undefined}
      />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {!isComingSoon && (
          <div className="flex items-center gap-1.5 pt-1 font-mono text-xs uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View Case Study
            <ArrowUpRight size={14} />
          </div>
        )}
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div className="h-full opacity-70">{card}</div>;
  }

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
