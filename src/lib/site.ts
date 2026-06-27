/**
 * Brand-wide constants. Single source of truth for identity, navigation,
 * and base URL. The brand line is permanently locked — never alter it.
 */

export const site = {
  name: "WORKFORCE",
  legalName: "WORKFORCE",
  trademark: "WORKFORCE™",
  tagline: "Human Intelligence. Redefined.",
  description:
    "WORKFORCE is a global enterprise workforce intelligence company. We transform fragmented workforce information into trusted enterprise intelligence.",
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
  { label: "Solutions", href: "/#value" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#philosophy" },
  { label: "Research", href: "/#global" },
  { label: "Company", href: "/#challenge" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Platform",
    items: [
      { label: "Enterprise Capabilities", href: "/#platform" },
      { label: "Enterprise Value", href: "/#value" },
      { label: "Global Network", href: "/#global" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Philosophy", href: "/#philosophy" },
      { label: "The Challenge", href: "/#challenge" },
      { label: "Industries", href: "/#industries" },
    ],
  },
  {
    heading: "Engage",
    items: [
      { label: "Request Consultation", href: "/contact" },
      { label: "Start the Conversation", href: "/contact" },
    ],
  },
];
