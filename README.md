# Vaughn Campos — Engineering Portfolio

A dark, technical "engineering lab notebook" portfolio built with Next.js 15, TypeScript,
Tailwind CSS, and an MDX-driven project content system. Designed to read as a research-lab
engineering log rather than a typical developer portfolio: blueprint grid backgrounds,
monospace instrumentation labels, and figure-style placeholders for media.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme, no `tailwind.config.js` needed)
- **MDX** via `next-mdx-remote/rsc` + `gray-matter` frontmatter parsing
- **lucide-react** for iconography
- Deploys as-is to **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # ESLint
```

## Adding or Editing a Project

Each project is a single MDX file in `content/projects/`. Frontmatter defines the
metadata schema (see `ProjectFrontmatter` in [`lib/projects.ts`](lib/projects.ts)):

```mdx
---
title: "Project Title"
description: "One-sentence summary shown on cards."
tags: ["C++", "Control Systems"]
status: "active" # "active" | "completed" | "coming-soon"
featured: true # show on the home page
order: 1 # sort order across project index/home
year: "2025"
diagram: "orbit" # "orbit" | "wave" | "circuit" | "triangle" | "grid" — card artwork
links:
  github: "https://github.com/you/repo"
  demo: "https://..."
  video: "https://..."
---

## Overview

...

## Problem

...

## Technical Architecture

...
```

Use `## Heading` for each major section (Overview, Problem, Technical Architecture,
Implementation Details, Challenges, Results, Lessons Learned, Future Work) — these are
styled automatically via `components/mdx-components.tsx`.

Drop in a placeholder figure anywhere in the body with the custom `Figure` component:

```mdx
<Figure
  label="Architecture diagram"
  kind="diagram"
  caption="Optional caption."
/>
```

`kind` accepts `image | diagram | graph | video | model`. Swap in a real `<img>` /
`next/image` once you have real media — the MDX pipeline supports standard Markdown
images out of the box too.

Adding a new project is just adding a new `.mdx` file to `content/projects/` — no code
changes required. It will automatically appear on `/projects` and (if `featured: true`)
on the home page.

## Before you deploy — placeholders to replace

- **`lib/site.ts`** — `links.github` and `links.linkedin` are placeholders
  (`your-github-username` / `your-linkedin-handle`). Update with your real profile URLs.
- **`public/resume.pdf`** — the Resume button links to `/resume.pdf`, which does not
  exist yet. Add your resume PDF at `public/resume.pdf`.
- **Per-project `links`** — each MDX file's frontmatter has an empty `links: {}`.
  Fill in `github` / `demo` / `video` as those repos/demos go live.
- **`lib/site.ts` → `url`** — set to your real production domain before relying on the
  generated `sitemap.xml`, `robots.txt`, or OpenGraph metadata.
- **Media placeholders** — the `<Figure />` blocks and card artwork are intentional
  placeholders ("media pending") until real screenshots/diagrams/videos are ready.

## Design System Notes

- Colors and fonts are defined in `app/globals.css` using Tailwind v4's `@theme inline`
  — no separate `tailwind.config.js`.
- `components/FadeIn.tsx` implements a lightweight IntersectionObserver-based scroll
  reveal (respects `prefers-reduced-motion`).
- `components/ProjectVisual.tsx` and `components/Figure.tsx` generate the technical
  "figure placeholder" artwork (grid paper background, corner brackets, small SVG
  diagrams) used until real project media is added.

## Deploying

This is a standard Next.js App Router project — push to a Git repo and import it on
[Vercel](https://vercel.com/new) with default settings. No environment variables are
required.
