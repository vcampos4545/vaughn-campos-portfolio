export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index?: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index && <span className="text-muted-2">{index}</span>}
        <span>{label}</span>
        <span className="h-px flex-1 max-w-16 bg-border-strong" />
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
