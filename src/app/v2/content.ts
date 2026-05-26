export type V2NavItem = {
  href: string;
  label: string;
};

export type V2Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
};

export const v2Nav: V2NavItem[] = [
  { href: "/v2", label: "Overview" },
  { href: "/v2/services", label: "Services" },
  { href: "/v2/commercial", label: "Commercial" },
  { href: "/v2/community", label: "Community" },
  { href: "/v2/coalition", label: "Coalition" },
  { href: "/v2/about", label: "About" },
  { href: "/v2/portal", label: "Portal" },
  { href: "/v2/contact", label: "Contact" },
];

export const v2Stats = [
  { label: "Years in operation", value: "14+" },
  { label: "Leadership experience", value: "60+ years" },
  { label: "Service domains", value: "5" },
  { label: "Prototype mode", value: "Reimagined UX" },
];

export const v2Services: V2Service[] = [
  {
    slug: "program-strategy",
    title: "Program Strategy and Delivery",
    summary: "From portfolio planning to execution governance with measurable delivery controls.",
    outcomes: [
      "Executive reporting with milestone confidence",
      "Program roadmap alignment across stakeholders",
      "Delivery velocity with reduced operational drag",
    ],
  },
  {
    slug: "risk-assurance",
    title: "Risk and Information Assurance",
    summary: "Risk-intelligent operating models for security-aware and compliance-heavy environments.",
    outcomes: [
      "Cross-functional risk visibility and response planning",
      "Controls alignment for regulated delivery contexts",
      "Decision support tied to enterprise risk posture",
    ],
  },
  {
    slug: "community-impact",
    title: "Community and Health Equity Operations",
    summary: "Coalition execution and outreach systems for sustainable community impact programs.",
    outcomes: [
      "Repeatable community campaign operations",
      "Trusted-partner activation and coordination",
      "Outcome tracking for equity-focused initiatives",
    ],
  },
];
