/** Nine enterprise capabilities. Each describes business value, not technology. */

export type Capability = {
  index: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
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
    title: "Recruitment Intelligence",
    description:
      "Hire with conviction. The right capability, sourced and qualified, at enterprise speed.",
  },
  {
    index: "04",
    title: "Deployment Intelligence",
    description:
      "Move capability to where it creates value. Readiness, mobility, and availability at a glance.",
  },
  {
    index: "05",
    title: "Compliance Intelligence",
    description:
      "Operate with confidence across borders. Standards, credentials, and obligations continuously assured.",
  },
  {
    index: "06",
    title: "Knowledge Intelligence",
    description:
      "Retain what your organisation knows. Institutional capability preserved as people move.",
  },
  {
    index: "07",
    title: "Decision Intelligence",
    description:
      "Lead with clarity. Workforce signals translated into decisions leaders can stand behind.",
  },
  {
    index: "08",
    title: "Enterprise Analytics",
    description:
      "See the whole picture. Workforce performance, risk, and capacity measured as one system.",
  },
  {
    index: "09",
    title: "Automation",
    description:
      "Remove the friction, keep the judgement. Routine workforce operations run quietly in the background.",
  },
];
