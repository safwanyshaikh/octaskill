/**
 * Brand-wide constants. Single source of truth for identity, navigation,
 * and base URL. The brand line is permanently locked — never alter it.
 */

export const site = {
  name: "WORKFORCE",
  signature: "SAY",
  parent: "SAY WORKFORCE",
  legalName: "WORKFORCE",
  trademark: "WORKFORCE™",
  tagline: "Human Intelligence. Redefined.",
  category: "Global Workforce Intelligence",
  augmentation: "KAI",
  description:
    "WORKFORCE is a global workforce intelligence company building the infrastructure that enables enterprises to discover, verify and deploy human intelligence.",
  url: "https://workforce.example",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary navigation. For this single-story homepage the items resolve to
 * in-page anchors, with Contact as a real page.
 */
export const primaryNav: NavItem[] = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Intelligence", href: "/#network" },
  { label: "About", href: "/#founder" },
  { label: "Insights", href: "/#insights" },
  { label: "Careers", href: "/#team" },
  { label: "Contact", href: "/contact" },
];

export const footerPillars: { heading: string; body: string }[] = [
  {
    heading: "Our Purpose",
    body: "To build the world’s Human Intelligence infrastructure and unlock human potential at global scale.",
  },
  {
    heading: "Our Promise",
    body: "The right human intelligence. At the right time. Anywhere in the world.",
  },
  {
    heading: "Our Vision",
    body: "To be the world’s most trusted Global Workforce Intelligence company and a category leader.",
  },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Platform",
    items: [
      { label: "Intelligence Layers", href: "/#platform" },
      { label: "Enterprise Solutions", href: "/#solutions" },
      { label: "Global Network", href: "/#network" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Founder", href: "/#founder" },
      { label: "Leadership", href: "/#team" },
      { label: "Insights", href: "/#insights" },
    ],
  },
  {
    heading: "Engage",
    items: [
      { label: "Request a Demo", href: "/contact" },
      { label: "Start the Conversation", href: "/contact" },
      { label: "Content Studio", href: "/admin" },
    ],
  },
];
