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

## Content editing (Content Studio)

Every section is editable at **`/admin`** (password-gated, verified server-side).
Edits publish to a **shared store**, so the change goes live for every visitor.

The store has two adapters, chosen automatically:

| Env vars present | Store used | Notes |
| --- | --- | --- |
| `KV_REST_API_URL` + `KV_REST_API_TOKEN` | Vercel KV / Upstash Redis | Recommended for production (durable, serverless-safe). |
| _none_ | Filesystem `.data/content.json` | Default; works locally and on any long-lived Node server. |

Image uploads (`POST /api/upload`):

| Env var | Storage |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (durable on serverless). |
| _none_ | Filesystem `.data/uploads`, served via `/api/uploads/[name]`. |

Environment variables:

- `ADMIN_PASSWORD` — editor password (defaults to a demo value; **set this in production**).
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` — enable the shared KV store.
- `BLOB_READ_WRITE_TOKEN` — enable durable image uploads on Vercel.

> On Vercel's serverless filesystem the file/`.data` adapters are ephemeral —
> add KV (content) and Blob (images) for durable, shared editing. Pasting an
> external image URL works on any host.

## The brief

The refined, copy-paste-ready creative + build prompt that this site is built
against lives in **[`docs/BUILD_PROMPT.md`](docs/BUILD_PROMPT.md)**.

---

WORKFORCE™ — *Human Intelligence. Redefined.*
