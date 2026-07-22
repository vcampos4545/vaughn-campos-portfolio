"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">&gt;</span> VAUGHN_CAMPOS
          <span className="animate-pulse text-accent">_</span>
        </Link>

        <nav className="hidden items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] sm:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-4 py-2 transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded border border-border-strong px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </nav>

        <button
          className="text-foreground sm:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] sm:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-2.5 ${
                  pathname === item.href ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded px-2 py-2.5 text-muted"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
