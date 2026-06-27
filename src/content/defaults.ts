import type { SiteContent } from "@/lib/content-types";

/**
 * Default site content. Rendered on the server (so the public site and search
 * engines always see real content) and used as the baseline the /admin editor
 * overrides via localStorage. Founder/Team are tasteful placeholders meant to
 * be replaced through the editor.
 */
export const defaultContent: SiteContent = {
  hero: {
    eyebrow: "Global Workforce Intelligence",
    tagline: "Human Intelligence. Redefined.",
    supporting:
      "Building the infrastructure that enables global enterprises to discover, verify and deploy human intelligence.",
    primaryCta: { label: "Explore Platform", href: "/#platform" },
    secondaryCta: { label: "Enterprise Solutions", href: "/contact" },
  },

  metrics: [
    { id: "countries", value: 45, suffix: "+", label: "Countries Presence" },
    {
      id: "verified",
      value: 2.4,
      decimals: 1,
      suffix: "M+",
      label: "Verified Human Intelligence",
    },
    { id: "partners", value: 1250, suffix: "+", label: "Enterprise Partners" },
    {
      id: "assurance",
      value: 96.7,
      decimals: 1,
      suffix: "%",
      label: "Deployment Assurance",
    },
    { id: "network", display: "24/7", label: "Intelligence Network" },
  ],

  philosophy: {
    eyebrow: "Brand Philosophy",
    lead: "AI can analyse. AI can automate.",
    emphasis:
      "AI cannot own experience, judgement, trust, accountability or human adaptability.",
    accent: "Those belong to humans.",
    body: "WORKFORCE combines deep human expertise with intelligent systems — KAI — to deliver assured outcomes at global scale. We don’t replace human judgement. We amplify human capability.",
  },

  layers: {
    eyebrow: "The Platform",
    heading: "Our Human Intelligence infrastructure.",
    intro:
      "Nine intelligence layers, each measured by the business value it creates — not the technology behind it.",
    items: [
      {
        id: "identity",
        index: "01",
        title: "Identity Intelligence",
        description:
          "Know exactly who is in your workforce. Verified people, verified history, a single source of truth.",
      },
      {
        id: "skill",
        index: "02",
        title: "Skill Intelligence",
        description:
          "Understand capability before you need it. Skills mapped, measured, and ready for deployment.",
      },
      {
        id: "verification",
        index: "03",
        title: "Verification Intelligence",
        description:
          "Trust every credential. Identity, qualifications, and history independently assured.",
      },
      {
        id: "deployment",
        index: "04",
        title: "Deployment Intelligence",
        description:
          "Move capability to where it creates value. Readiness, mobility, and availability at a glance.",
      },
      {
        id: "mobility",
        index: "05",
        title: "Mobility Intelligence",
        description:
          "Cross every border with confidence. Visas, immigration, and movement managed end to end.",
      },
      {
        id: "compliance",
        index: "06",
        title: "Compliance Intelligence",
        description:
          "Operate within the rules everywhere. Standards and obligations continuously assured.",
      },
      {
        id: "project",
        index: "07",
        title: "Project Intelligence",
        description:
          "Match the workforce to the mission. The right capability aligned to every project phase.",
      },
      {
        id: "demand",
        index: "08",
        title: "Demand Intelligence",
        description:
          "See what the enterprise will need next. Workforce demand modelled before it arrives.",
      },
      {
        id: "future",
        index: "09",
        title: "Future Intelligence",
        description:
          "Prepare for the workforce of the next decade. Capability planned for what comes next.",
      },
    ],
  },

  solutions: {
    eyebrow: "Enterprise Solutions",
    heading: "One partner. Every workforce need.",
    intro:
      "From global talent acquisition to managed workforce programmes — delivered as services on a single intelligence platform.",
    items: [
      "Global Talent Acquisition",
      "Contract & Project Staffing",
      "Managed Workforce Solutions",
      "Executive Search",
      "RPO & Talent Projects",
      "Payroll & Compliance",
      "Mobility & Immigration",
      "KAI Intelligence Platform",
    ],
  },

  industries: {
    eyebrow: "Mission-Critical Ecosystems",
    heading: "Where the world gets built.",
    intro:
      "We serve the industries that power economies and build the future — the sectors where workforce certainty is non-negotiable.",
    items: [
      "Energy & Resources",
      "Infrastructure & EPC",
      "Data Centers",
      "Semiconductors",
      "Advanced Manufacturing",
      "Automotive",
      "Marine & Offshore",
      "Healthcare",
      "Aerospace & Defense",
    ],
  },

  differentiators: {
    eyebrow: "Key Differentiators",
    heading: "Why enterprises trust WORKFORCE.",
    items: [
      {
        id: "core",
        title: "Human Intelligence at the core",
        description: "Not replacement. Amplification.",
      },
      {
        id: "verified",
        title: "Verified. Measured. Deployable.",
        description: "Our intelligence layers ensure certainty.",
      },
      {
        id: "global",
        title: "Global infrastructure, local depth",
        description: "On-ground expertise with global reach.",
      },
      {
        id: "kai",
        title: "KAI — Human Intelligence Augmentation",
        description: "AI as co-pilot. Humans lead.",
      },
      {
        id: "outcome",
        title: "Outcome ownership",
        description: "We don’t just fill roles. We deliver outcomes.",
      },
    ],
  },

  founder: {
    eyebrow: "Founder",
    name: "Imran Sayed",
    title: "Founder & Chief Executive",
    message:
      "We started WORKFORCE on a simple conviction: the world is not short of people, it is short of intelligence about people. Our mission is to build the infrastructure that lets every enterprise understand human capability with certainty — and deploy it where it matters most.",
    image: "",
  },

  team: {
    eyebrow: "Leadership",
    heading: "The people behind the platform.",
    intro:
      "A leadership team with deep roots in industry, workforce, and intelligent systems.",
    members: [
      {
        id: "coo",
        name: "Sara Khan",
        role: "Chief Operating Officer",
        bio: "Two decades scaling workforce operations across energy and infrastructure.",
        image: "",
      },
      {
        id: "cio",
        name: "David Mensah",
        role: "Chief Intelligence Officer, KAI",
        bio: "Leads the KAI augmentation platform and intelligence architecture.",
        image: "",
      },
      {
        id: "deploy",
        name: "Elena Rossi",
        role: "Global Head of Deployment",
        bio: "Mobilises verified workforce across 45+ countries.",
        image: "",
      },
      {
        id: "compliance",
        name: "Omar Farouk",
        role: "Head of Compliance",
        bio: "Ensures standards and obligations are met in every jurisdiction.",
        image: "",
      },
    ],
  },

  testimonials: {
    eyebrow: "Trusted by Enterprise",
    heading: "Outcomes leaders stand behind.",
    items: [
      {
        id: "t1",
        quote:
          "WORKFORCE gave us a single, verified view of capability across three continents. Deployment readiness stopped being a guess.",
        name: "Group COO",
        company: "Global EPC Contractor",
      },
      {
        id: "t2",
        quote:
          "The intelligence layers turned workforce risk into something we can actually measure and manage at board level.",
        name: "CHRO",
        company: "Energy Major",
      },
      {
        id: "t3",
        quote:
          "Compliance across jurisdictions used to slow every mobilisation. Now it runs quietly in the background.",
        name: "Operations Director",
        company: "Infrastructure Developer",
      },
    ],
    logos: ["MERIDIAN", "ATLAS ENERGY", "NORTHWIND", "VANTAGE", "KEYSTONE"],
  },

  insights: {
    eyebrow: "Insights & Research",
    heading: "Perspectives on workforce intelligence.",
    intro:
      "Research, benchmarks and market intelligence for enterprise leaders.",
    items: [
      {
        id: "i1",
        title: "The capability gap is an intelligence gap",
        date: "June 2026",
        excerpt:
          "Why the organisations that win the next decade will be the ones that understand capability before they need it.",
      },
      {
        id: "i2",
        title: "Deployment readiness as a board metric",
        date: "May 2026",
        excerpt:
          "Moving workforce from a cost line to a measurable driver of operational resilience.",
      },
      {
        id: "i3",
        title: "Human intelligence in the age of AI",
        date: "April 2026",
        excerpt:
          "How KAI augments — rather than replaces — the human judgement enterprises depend on.",
      },
    ],
  },

  network: {
    eyebrow: "Global Intelligence Network",
    heading: "One network. One standard.",
    body: "Boundless human intelligence — on-ground expertise in every region you operate, connected as one living ecosystem.",
  },

  finalCta: {
    heading:
      "The future belongs to organisations that understand Human Intelligence.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Start the Conversation", href: "/contact" },
  },
};
