# WORKFORCE™ — Human Intelligence. Redefined.

The enterprise website for **WORKFORCE™**, a global workforce intelligence
company. Built as a single continuous story designed to earn executive trust —
executive, minimal, architectural, timeless.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens, strict palette, warm
  amber-gold accent)
- **Space Grotesk** (display) + **Manrope** (body) via `next/font`
- Zero animation libraries — scroll reveals via a tiny `IntersectionObserver`
  primitive; a perf-guarded 2D-canvas intelligence globe in the hero and a
  count-up metrics bar. All motion respects `prefers-reduced-motion`.

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
    brand/        Logo (W monogram + SAY WORKFORCE lockup)
    layout/       SiteHeader, SiteFooter
    sections/     Hero, Metrics, Philosophy, IntelligenceLayers, Solutions,
                  Industries, Differentiators, Global, FinalCta
    visuals/      GlobeCanvas (hero), WorldMap (global network)
    primitives/   Container, Eyebrow, Reveal, CtaButton, Stat
    seo/          JsonLd (Organization + WebSite)
  content/        intelligence-layers (9), solutions (8), industries (9),
                  differentiators (5), metrics (5), regions
  lib/            site.ts — locked brand constants & navigation
```

## The brief

The refined, copy-paste-ready creative + build prompt that this site is built
against lives in **[`docs/BUILD_PROMPT.md`](docs/BUILD_PROMPT.md)**.

---

WORKFORCE™ — *Human Intelligence. Redefined.*
