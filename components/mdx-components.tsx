import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mt-14 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent first:mt-0 first:border-t-0 first:pt-0"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="mt-8 text-xl font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="mt-4 text-[15px] leading-relaxed text-muted">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className="mt-4 space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className="mt-4 space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent marker:font-mono">
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="pl-1">
      {children}
    </li>
  ),
  a: ({ children, href = "", ...props }) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        {...props}
        href={href}
        className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
      >
        {children}
      </Link>
    );
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="mt-6 border-l-2 border-accent/50 bg-background-elevated py-3 pl-5 pr-4 text-[15px] italic text-muted"
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code {...props} className="rounded bg-background-elevated px-1.5 py-0.5 font-mono text-[13px] text-data">
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      {...props}
      className="mt-4 overflow-x-auto rounded-lg border border-border bg-background-elevated p-4 font-mono text-[13px] leading-relaxed"
    >
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }) => (
    <span className="mt-6 block overflow-hidden rounded-lg border border-border bg-background-elevated">
      <Image
        src={typeof src === "string" ? src : ""}
        alt={alt ?? ""}
        width={1200}
        height={675}
        className="h-auto w-full"
        {...props}
      />
    </span>
  ),
  hr: (props) => <hr {...props} className="mt-10 border-border" />,
};
