# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Joe Crop (joecrop.com) — a Vite + React 18 single-page app, styled with Tailwind, animated with Framer Motion, with MDX-authored technical blog posts. There is no test suite and no backend.

## Commands

```bash
npm run dev        # Vite dev server (hot reload)
npm run build      # Vite production build → dist/
npm run preview    # Serve the built dist/ locally
./build.sh         # Full production build (resume PDF + MkDocs blog + Vite) — this is what Netlify runs
```

There is no lint or test command. `.prettierrc.json` exists but Prettier is not wired into a script.

## Deployment

**Deployment is pipeline-only. Never deploy manually.** The only way to ship is to push (or merge) to `main` — Netlify then runs `./build.sh` and publishes `dist/` automatically. Do not run `npm run deploy`, `gh-pages`, `netlify deploy`, or any other hand-rolled deploy; do not publish `dist/` from a workstation. To release, commit to `main` and let the pipeline build.

`build.sh` (what Netlify runs) does three things in order:
1. Compiles `public/resume/resume.tex` → `resume.pdf` via TinyTeX/pdflatex (installs TinyTeX on Linux/Netlify; falls back to the pre-committed `resume.pdf` if no LaTeX is available locally).
2. Builds the MkDocs blog (`src/blog/`) into `public/blog/` (skipped if `pip` is absent).
3. Runs `npm run build`.

Note: `package.json` still has a `gh-pages` `deploy`/`predeploy` script and `.github/workflows/node.js.yml` exists, but these are stale — **do not use them**. Netlify (`netlify.toml`) is the only live deploy path; `netlify.toml` includes an SPA catch-all redirect to `/index.html`.

## Architecture

- **Routing** (`src/App.jsx`): Client-side via `react-router-dom`. `Home` is eager-loaded for fast first paint; every other page is `React.lazy` + `Suspense`. Each lazy route is individually wrapped via the `S` component so the `Routes` tree is never replaced wholesale. `AuroraBackground`, `ScrollProgress`, and `ScrollToTop` (scroll reset on navigation) render once outside `Routes`.
- **Page composition**: Most pages render their own `<Header />` + `<PageWrapper>` + `<Footer />` (not a shared layout route). `Home` composes section components from `src/components/sections/`. Reusable chrome lives in `src/components/layout/`.
- **Content as data** (`src/data/`): Page content (resume, chips, classes, teaching, music, pictures, links, portfolio, blog-posts) is hardcoded in JS modules and imported by pages. To change site content, edit these files — not the JSX.
- **Blog** (dual system, intentional):
  - `src/blog/*.mdx` — MDX posts rendered inside the React app at `/projects/:slug`. `BlogPost.jsx` maps slug → lazy MDX import in `mdxModules`; metadata (title, tags, date, views) comes from `src/data/blog-posts.js`. **Adding a post requires editing both**: add the `.mdx` file + a `mdxModules` entry, and add a `blogPosts` entry. MDX is compiled by the `@mdx-js/rollup` plugin (see `vite.config.js`) with `remark-gfm` + frontmatter plugins.
  - `src/blog/docs/` + `mkdocs.yml` — a separate MkDocs-Material site built by `build.sh` into `public/blog/`. Distinct from the in-app MDX posts.
- **Theming** (`src/hooks/useTheme.js`): Light/dark via a `light`/`dark` class on `<html>` (Tailwind `darkMode: "class"`), persisted to `localStorage`, defaults to dark. Style dark-first and add `light`-variant overrides; the custom color palette (`background`, `surface`, `accent`, `text`, etc. with `-light` variants) is defined in `tailwind.config.js`.
- **Styling**: Tailwind utility classes merged via `cn()` (`src/lib/utils.js` = `clsx` + `tailwind-merge`). Glassmorphism (backdrop-blur + translucent backgrounds) and Framer Motion `layoutId` shared-element transitions are used heavily in `Header.jsx`. Path alias `@` → `/src` is configured in `vite.config.js`.

## Conventions

- `.jsx` for components/pages, default exports for components.
- Legacy directories `src_old/` (the previous Create-React-App site) and `build/` (old build output, also gitignored) are not part of the active app — ignore them.
