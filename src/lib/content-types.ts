/**
 * The full editable content model for the WORKFORCE site. Every section reads
 * from this shape; the /admin editor writes to it. Brand constants that are
 * permanently locked (name, tagline) live in `site.ts`, not here.
 */

export type CTA = { label: string; href: string };

export type Metric = {
  id: string;
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

export type Layer = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export type Differentiator = {
  id: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
};

export type Insight = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

export type SiteContent = {
  hero: {
    eyebrow: string;
    tagline: string;
    supporting: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  metrics: Metric[];
  philosophy: {
    eyebrow: string;
    lead: string;
    emphasis: string;
    accent: string;
    body: string;
  };
  layers: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Layer[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
  };
  differentiators: {
    eyebrow: string;
    heading: string;
    items: Differentiator[];
  };
  founder: {
    eyebrow: string;
    name: string;
    title: string;
    message: string;
    image?: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    intro: string;
    members: TeamMember[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Testimonial[];
    logos: string[];
  };
  insights: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Insight[];
  };
  network: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  finalCta: {
    heading: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
};

/** Keys that map to editor tabs, in display order. */
export const sectionKeys = [
  "hero",
  "metrics",
  "philosophy",
  "layers",
  "solutions",
  "industries",
  "differentiators",
  "founder",
  "team",
  "testimonials",
  "insights",
  "network",
  "finalCta",
] as const;

export type SectionKey = (typeof sectionKeys)[number];

export const sectionLabels: Record<SectionKey, string> = {
  hero: "Hero",
  metrics: "Metrics",
  philosophy: "Philosophy",
  layers: "Intelligence Layers",
  solutions: "Solutions",
  industries: "Industries",
  differentiators: "Differentiators",
  founder: "Founder",
  team: "Team",
  testimonials: "Testimonials",
  insights: "Insights",
  network: "Network",
  finalCta: "Final CTA",
};
