import Link from "next/link";
import { SquareCode, Link2, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-xs text-muted-2">
          <p>&copy; {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
          <p className="mt-1">Log last updated at build time.</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <SquareCode size={18} />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Link2 size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
