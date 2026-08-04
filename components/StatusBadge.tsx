import type { ProjectStatus } from "@/lib/projects";

const STATUS_CONFIG: Partial<
  Record<ProjectStatus, { label: string; dot: string; text: string }>
> = {
  "coming-soon": {
    label: "In Progress",
    dot: "bg-muted-2",
    text: "text-muted",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background-elevated px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${config.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
