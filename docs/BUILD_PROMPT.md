# WORKFORCE™ — Master Build Prompt

> A refined, copy-paste-ready prompt for an AI design/build agent (Claude, or
> any capable model) to produce the WORKFORCE™ enterprise website. This is the
> distilled, model-ready form of the original creative directive — same locked
> brand, tightened into an actionable specification with explicit acceptance
> criteria. The accompanying implementation in this repository (`/src`) is a
> reference build that already satisfies it.

---

## 0. The one-line test

Build the digital headquarters of a future global enterprise. Success is a
single question:

> **Would a Fortune 500 CEO believe this company belongs in the same
> conversation as the world's most respected enterprise brands?**

If any page would make a CEO hesitate, redesign it until the answer is *yes*.

---

## 1. Role

Act as one integrated team: Global Brand Strategist · Enterprise UX Architect ·
Chief Design Officer · Fortune 500 Creative Director · Information Architect ·
Product Designer · Motion Designer · Copy Director · Content Strategist ·
Conversion Expert · Accessibility Specialist.

Design with the discipline of Apple, the clarity of Stripe, the confidence of
BlackRock, the precision of Palantir, and the simplicity of Linear — but
**never imitate**. Create an original, category-defining brand.

---

## 2. The constitution (the belief that guides every decision)

The world does not have a shortage of people. It has a shortage of **workforce
intelligence**. Organisations collect data; very few understand capability.
Technology should never replace human judgement — it should amplify human
capability. **WORKFORCE exists to transform fragmented workforce information
into trusted enterprise intelligence.** Every headline, interaction, and
animation must serve this belief.

---

## 3. Brand (permanently locked — never alter)

- **Name:** WORKFORCE™
- **Signature / parent identity:** SAY → **SAY WORKFORCE**
- **Tagline:** *Human Intelligence. Redefined.*
- **Category:** Global Workforce Intelligence
- **Intelligence augmentation sub-brand:** **KAI** — Human Intelligence
  Augmentation (AI as co-pilot; humans lead)
- Logo lockup: a gold **W monogram** with a small uppercase **SAY** signature
  above the WORKFORCE wordmark.
- Never write another tagline. Never dilute it.

---

## 4. Positioning

WORKFORCE is a **global enterprise workforce intelligence company.**

It is **not**: a recruitment agency, staffing company, HR consultancy, job
portal, ATS, CRM, payroll site, or generic AI startup. Recruitment, staffing,
executive search, managed workforce, and consulting are *capabilities* — not
the identity.

---

## 5. Audience

Fortune 500 CEOs, CHROs, COOs, Procurement & Operations leaders; industrial
conglomerates, infrastructure / engineering / manufacturing / energy
enterprises; private equity, institutional investors, and government. **Respect
executive attention in every sentence.**

---

## 6. Emotional journey

Curiosity → Confidence → Trust → Authority → Conversation. **Never sell. Earn
belief.** Create belief *before* explaining services. Within five seconds a
visitor must think *"This company understands enterprise workforce challenges"*
— never *"another recruitment company."*

---

## 7. Design language

Executive · minimal · luxury · architectural · timeless · global · confident.
No visual noise, no decorative effects, no gimmicks, no startup or recruitment
clichés. **Whitespace is part of the design. Typography carries the brand.**

If something does not increase trust, remove it. If it feels like a recruitment
website, redesign it. If it is trendy but not timeless, remove it.

---

## 8. Visual system

- Massive typography, perfect spacing, invisible grids.
- Elegant iconography; abstract workforce-intelligence visuals; subtle
  "intelligence" animation. **No stock photography, no smiling business people,
  no handshakes, no office or recruitment imagery, no hard hats, no clipart.**
- **Colour palette (strict — nothing more):** White · Charcoal · Deep Navy ·
  Soft Grey · **one** premium gold accent. Tokens: white `#FFFFFF`, charcoal
  `#14161A`, deep navy `#0A1A33` / `#06122A`, soft grey `#F4F5F7`, muted body
  grey `#5B6472`, **warm amber-gold `#C9A24A`** (with a lighter `#E2C271` for
  highlights). No bright or childish colours.
- **Typography is the hero.** Large headlines (~96px desktop), ≤ 8 words and
  ≤ 3 lines where possible, readable in three seconds. Short paragraphs,
  generous measure limits (headlines ~14–20ch, body ~60ch). **Space Grotesk**
  for display headlines + **Manrope** for body/UI (Inter is an acceptable
  substitute for either).

---

## 9. Motion

Motion must communicate intelligence, never decorate. Scrolling feels
effortless; transitions are almost invisible; micro-interactions feel premium;
every animation has a purpose. **Respect `prefers-reduced-motion`** — disable
non-essential motion entirely. Keep JS minimal so motion never costs
performance.

---

## 10. Copy

Simple · confident · executive · minimal · timeless. Write for executives — not
algorithms, recruiters, or candidates. Every paragraph answers *"Why does this
matter?"* Never exaggerate or use clichés ("leading", "best", "innovative").
**Show credibility; do not claim it.**

---

## 11. Homepage — one continuous story (exact order)

Do not build disconnected sections. Build one narrative. One message per
section, one primary CTA per page.

1. **Hero** — SAY · `WORKFORCE™` / *Human Intelligence. Redefined.* Supporting
   line: "Building the infrastructure that enables global enterprises to
   discover, verify and deploy human intelligence." Primary CTA **Explore
   Platform**; secondary **Enterprise Solutions**. Background: a luminous,
   slowly rotating global intelligence globe — subtle, animated, elegant.
2. **Metrics** — enterprise proof bar that counts up on scroll: 45+ Countries ·
   2.4M+ Verified Human Intelligence · 1,250+ Enterprise Partners · 96.7%
   Deployment Assurance · 24/7 Intelligence Network.
3. **Brand Philosophy** — "AI can analyse. AI can automate. AI cannot own
   experience, judgement, trust, accountability or human adaptability. Those
   belong to humans." WORKFORCE combines deep human expertise with intelligent
   systems (KAI) to deliver assured outcomes at global scale.
4. **The Platform — Intelligence Layers (9)** — Identity · Skill · Verification
   · Deployment · Mobility · Compliance · Project · Demand · Future
   Intelligence. Each explains **business value, not technology.** Powered by
   **KAI**.
5. **Enterprise Solutions (8)** — Global Talent Acquisition · Contract &
   Project Staffing · Managed Workforce Solutions · Executive Search · RPO &
   Talent Projects · Payroll & Compliance · Mobility & Immigration · KAI
   Intelligence Platform.
6. **Mission-Critical Ecosystems (9)** — Energy & Resources · Infrastructure &
   EPC · Data Centers · Semiconductors · Advanced Manufacturing · Automotive ·
   Marine & Offshore · Healthcare · Aerospace & Defense.
7. **Key Differentiators (5)** — Human Intelligence at the core (not
   replacement, amplification) · Verified, measured, deployable · Global
   infrastructure, local depth · KAI augmentation · Outcome ownership.
8. **Global Intelligence Network** — "One network. One standard. Boundless
   human intelligence." An interactive intelligence map / living global
   ecosystem with elegant enterprise motion.
9. **Final CTA** — "The future belongs to organisations that understand Human
   Intelligence." WORKFORCE™ — *Human Intelligence. Redefined.* **Request a
   Demo** / **Start the Conversation.**

**Navigation:** Platform · Solutions · Industries · Intelligence · About ·
Resources · Careers · Contact — nothing unnecessary.
**Footer:** quiet, minimal, timeless, corporate — anchored by the brand
pillars (Our Purpose · Our Promise · Our Vision) and the SAY WORKFORCE
signature.

---

## 12. Engineering & SEO targets

- Stack: **Next.js (App Router) + Tailwind CSS + TypeScript**, deployable on
  Vercel. Static-first rendering.
- Semantic HTML, proper heading hierarchy (one `<h1>`, sequential `<h2>`s),
  landmark roles, **accessibility AA**.
- Follow Google Helpful Content principles; optimise naturally (no keyword
  stuffing). Enterprise metadata, Open Graph + Twitter, JSON-LD
  (`Organization` + `WebSite`), `sitemap.xml`, `robots.txt`.
- **Core Web Vitals ≥ 95** (Performance / Accessibility / Best Practices /
  SEO). Fast loading, minimal JavaScript, no layout shift; ambient visuals must
  never be the LCP element or block first paint.

---

## 13. Final quality gate

Before delivery, every page must answer **yes** to all:

- Is it timeless? Enterprise-grade? Globally credible?
- Is the message clear in under five seconds?
- Would a Fortune 500 executive trust this brand?
- Would an institutional investor believe it can scale globally?
- Does every section strengthen the brand?
- Does it avoid looking like a recruitment agency?
- Is it distinctive without being confusing?

If any answer is *no*, redesign until it is *yes*.

> Do not optimise for awards. Optimise for **trust, clarity, longevity, and
> enterprise credibility.** Build a brand that still stands confidently ten
> years from now.
>
> **WORKFORCE™ — Human Intelligence. Redefined.**
