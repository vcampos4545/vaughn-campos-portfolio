import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isComingSoon = project.status === "coming-soon";
  const code = String(index + 1).padStart(2, "0");

  const card = (
    <div className="group flex h-full flex-col gap-5">
      <ProjectVisual
        code={code}
        title={project.title}
        diagram={project.diagram}
        heroImage={project.heroImage || undefined}
      />

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {!isComingSoon && (
          <div className="pt-3 font-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 transition-colors group-hover:decoration-accent">
            Read More &rarr;
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
