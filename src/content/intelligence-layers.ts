/** The nine Intelligence Layers. Each describes business value, not technology. */

export type Layer = {
  index: string;
  title: string;
  description: string;
};

export const intelligenceLayers: Layer[] = [
  {
    index: "01",
    title: "Identity Intelligence",
    description:
      "Know exactly who is in your workforce. Verified people, verified history, a single source of truth.",
  },
  {
    index: "02",
    title: "Skill Intelligence",
    description:
      "Understand capability before you need it. Skills mapped, measured, and ready for deployment.",
  },
  {
    index: "03",
    title: "Verification Intelligence",
    description:
      "Trust every credential. Identity, qualifications, and history independently assured.",
  },
  {
    index: "04",
    title: "Deployment Intelligence",
    description:
      "Move capability to where it creates value. Readiness, mobility, and availability at a glance.",
  },
  {
    index: "05",
    title: "Mobility Intelligence",
    description:
      "Cross every border with confidence. Visas, immigration, and movement managed end to end.",
  },
  {
    index: "06",
    title: "Compliance Intelligence",
    description:
      "Operate within the rules everywhere. Standards and obligations continuously assured.",
  },
  {
    index: "07",
    title: "Project Intelligence",
    description:
      "Match the workforce to the mission. The right capability aligned to every project phase.",
  },
  {
    index: "08",
    title: "Demand Intelligence",
    description:
      "See what the enterprise will need next. Workforce demand modelled before it arrives.",
  },
  {
    index: "09",
    title: "Future Intelligence",
    description:
      "Prepare for the workforce of the next decade. Capability planned for what comes next.",
  },
];
