import type { Metadata } from "next";
import { FileText, Mail, SquareCode, Link2 } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer interested in aerospace, robotics, simulation, and AI.",
};

const INTERESTS = [
  "Spacecraft guidance, navigation & control",
  "Orbital mechanics and constellation design",
  "Embedded and real-time control systems",
  "Robotics and mechatronic systems",
  "Numerical simulation and physics modeling",
  "Applied AI and LLM-driven systems",
];

const SKILLS: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["C++", "C", "Python", "TypeScript"] },
  {
    category: "Systems & Embedded",
    items: ["STM32", "Real-Time Control", "IMU/Sensor Fusion", "PID Control"],
  },
  {
    category: "Simulation & Graphics",
    items: ["OpenGL", "Orbital Mechanics", "Quaternion Math", "Numerical Methods"],
  },
  {
    category: "Web & Cloud",
    items: ["Next.js", "React", "Supabase", "Postgres", "AWS"],
  },
];

const CURRENTLY_BUILDING = [
  {
    title: "CubeSat ADCS",
    description:
      "A full attitude determination and control stack for a CubeSat form factor, extending prior simulation and reaction-wheel control work toward flight-representative hardware.",
  },
  {
    title: "CFD Simulation",
    description:
      "A computational fluid dynamics tool for exploring flow behavior around simple geometries, built to deepen intuition for aerodynamic and thermal problems.",
  },
  {
    title: "Embedded Flight Computer",
    description:
      "A from-scratch embedded flight computer stack (sensor drivers, scheduling, and fault handling) designed with spacecraft and rocketry avionics in mind.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <FadeIn>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Personnel File
        </div>

        <h1 className="mt-6 font-serif text-5xl font-normal tracking-tight text-balance sm:text-6xl">
          About
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Software engineer interested in aerospace, robotics, simulation, and AI.
          I enjoy building systems that connect software with the physical world.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <FileText size={14} />
            Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={14} />
            {site.email}
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

      {/* Technical interests */}
      <FadeIn>
        <div className="mt-20">
          <SectionHeading index="02" label="Focus Areas" title="Technical interests" />
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {INTERESTS.map((interest) => (
              <li
                key={interest}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Skills */}
      <FadeIn>
        <div className="mt-20">
          <SectionHeading index="03" label="Toolset" title="Skills" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-background-elevated px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Currently building */}
      <FadeIn>
        <div className="mt-20">
          <SectionHeading
            index="04"
            label="In Progress"
            title="Currently building"
            description="Active work-in-progress projects, in various states of assembly."
          />
          <div className="mt-8 space-y-4">
            {CURRENTLY_BUILDING.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-data" />
                  <h3 className="font-mono text-sm uppercase tracking-widest text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
