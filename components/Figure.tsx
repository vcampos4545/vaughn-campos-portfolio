import { LineChart, Workflow, Image as ImageIcon, Video, Boxes } from "lucide-react";

const ICONS = {
  image: ImageIcon,
  diagram: Workflow,
  graph: LineChart,
  video: Video,
  model: Boxes,
} as const;

export function Figure({
  label,
  kind = "image",
  caption,
}: {
  label: string;
  kind?: keyof typeof ICONS;
  caption?: string;
}) {
  const Icon = ICONS[kind];

  return (
    <figure className="mt-6 not-prose">
      <div className="bracket-corners relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden border border-border bg-background-elevated">
        <div className="grid-paper absolute inset-0 h-full opacity-50" />
        <Icon className="relative z-10 text-muted-2" size={28} strokeWidth={1.25} />
        <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-muted">
          {label}
        </span>
        <span className="relative z-10 font-mono text-[10px] text-muted-2">
          media pending &mdash; {kind}
        </span>
      </div>
      {caption && (
        <figcaption className="mt-2 font-mono text-xs text-muted-2">{caption}</figcaption>
      )}
    </figure>
  );
}
