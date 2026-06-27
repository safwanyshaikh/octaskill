# WORKFORCE™ — Human Intelligence. Redefined.

The enterprise website for **WORKFORCE™**, a global workforce intelligence
company. Built as a single continuous story designed to earn executive trust —
executive, minimal, architectural, timeless.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens, strict palette)
- **Geist** typeface via `next/font` (self-contained, no network at build)
- Zero animation libraries — scroll reveals via a tiny `IntersectionObserver`
  primitive; ambient hero network on a perf-guarded 2D canvas. All motion
  respects `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static-first)
npm run start    # serve the production build
```

## Structure

```
src/
  app/            layout (fonts, metadata, JSON-LD), homepage, /contact, sitemap, robots
  components/
    layout/       SiteHeader, SiteFooter
    sections/     the nine homepage sections, in story order
    visuals/      NetworkCanvas (hero), WorldMap (global)
    primitives/   Container, Eyebrow, Reveal, CtaButton
    seo/          JsonLd (Organization + WebSite)
  content/        capabilities (9), industries (16), enterprise value (8), regions
  lib/            site.ts — locked brand constants & navigation
```

## The brief

The refined, copy-paste-ready creative + build prompt that this site is built
against lives in **[`docs/BUILD_PROMPT.md`](docs/BUILD_PROMPT.md)**.

---

WORKFORCE™ — *Human Intelligence. Redefined.*
