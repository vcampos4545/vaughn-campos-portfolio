export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-border bg-background-elevated px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  );
}
