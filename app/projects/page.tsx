import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Simulation, embedded control, and applied AI projects spanning spacecraft engineering and full-stack software.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <FadeIn>
        <SectionHeading
          label="Project Index"
          title="All projects"
          description="Every entry in the log, from completed builds to work in progress."
        />
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} index={i} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
