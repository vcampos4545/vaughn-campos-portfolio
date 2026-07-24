import Image from "next/image";

const DIAGRAMS = {
  orbit: (
    <>
      <circle cx="50%" cy="50%" r="34%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="50%" cy="50%" r="20%" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="84%" cy="50%" r="3" fill="currentColor" />
    </>
  ),
  wave: (
    <path
      d="M0,50 Q 8,20 16,50 T 32,50 T 48,50 T 64,50 T 80,50 T 96,50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      transform="scale(4.2, 1) translate(0, 20)"
      vectorEffect="non-scaling-stroke"
    />
  ),
  circuit: (
    <>
      <path d="M10,80 h30 v-30 h40 v-25" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M90,20 h-25 v40 h-45 v20" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="10" cy="80" r="2.5" fill="currentColor" />
      <circle cx="90" cy="20" r="2.5" fill="currentColor" />
    </>
  ),
  triangle: (
    <polygon
      points="50,15 85,80 15,80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
  ),
} as const;

export function ProjectVisual({
  code,
  title,
  diagram = "grid",
  heroImage,
  className = "",
}: {
  code: string;
  title: string;
  diagram?: keyof typeof DIAGRAMS | "grid";
  heroImage?: string;
  className?: string;
}) {
  return (
    <div
      className={`bracket-corners relative aspect-video w-full overflow-hidden border border-border bg-background-elevated ${className}`}
    >
      {heroImage ? (
        <>
          <Image
            src={heroImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20" />
        </>
      ) : (
        <>
          <div className="grid-paper absolute inset-0 h-full opacity-60" />
          {diagram !== "grid" && (
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-muted-2/70"
            >
              {DIAGRAMS[diagram]}
            </svg>
          )}
        </>
      )}
      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-2">
        Fig. {code}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {title}
        </span>
        {!heroImage && (
          <span className="font-mono text-[10px] text-muted-2">image pending</span>
        )}
      </div>
    </div>
  );
}
