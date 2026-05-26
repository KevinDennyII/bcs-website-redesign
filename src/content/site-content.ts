export type NavItem = {
  href: string;
  label: string;
};

export type MigrationSection = {
  heading: string;
  summary: string;
  tasks: string[];
};

export type StatItem = {
  label: string;
  value: string;
};

export type ServicePreview = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  deliveryApproach: string[];
  sectors: string[];
};

export type LeadershipProfile = {
  name: string;
  role: string;
  focus: string;
  detail: string;
};

export type CommercialCapability = {
  title: string;
  details: string[];
};

export type CommunityInitiative = {
  title: string;
  highlights: string[];
};

export type ImageReplacementPriority = {
  asset: string;
  currentResolution: string;
  risk: "High" | "Medium";
  action: string;
};

export type ProgramHighlight = {
  title: string;
  summary: string;
  bullets: string[];
};

export type SectionLink = {
  href: string;
  title: string;
  summary: string;
};

export type CredentialRecord = {
  label: string;
  value: string;
  note?: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/v2", label: "V2 Prototype" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/bcs-team-portal", label: "BCS Team Portal" },
  { href: "/community-solutions", label: "Community Solutions" },
  { href: "/good-health-wins-vaccine-education", label: "Coalition" },
  { href: "/contact", label: "Contact" },
];

export const pageMigrationPlan: Record<string, MigrationSection[]> = {
  home: [
    {
      heading: "Hero and Value Proposition",
      summary: "Clarify BCS positioning in one concise statement with supportive proof points.",
      tasks: [
        "Create final homepage headline and supporting copy",
        "Promote one primary conversion path above the fold",
        "Define hero image requirements using audited dimensions",
      ],
    },
    {
      heading: "Trust and Differentiation",
      summary: "Highlight certifications, years of experience, and key contract history.",
      tasks: [
        "Build a certification strip with vector-ready badges",
        "Add social proof logos with accessible alt text",
        "Draft measurable outcomes for top case studies",
      ],
    },
  ],
  about: [
    {
      heading: "Company Story",
      summary: "Convert current narrative text into a timeline-style structure for readability.",
      tasks: [
        "Draft mission, vision, and values blocks",
        "Map key milestones from capability summary PDF",
        "Prepare leadership bios with structured profile cards",
      ],
    },
    {
      heading: "Leadership and Teaming",
      summary: "Present leadership and partnership model with clear roles and strengths.",
      tasks: [
        "Create leadership card templates with role metadata",
        "Translate team partnership tables into responsive cards",
        "Capture final approval for executive headshots and bios",
      ],
    },
  ],
  services: [
    {
      heading: "Service Architecture",
      summary: "Standardize service descriptions with outcomes, methods, and sectors served.",
      tasks: [
        "Define canonical service categories and sub-services",
        "Create reusable service card and detail blocks",
        "Add CTA pattern for contact and teaming inquiries",
      ],
    },
  ],
  portal: [
    {
      heading: "Portal Clarification",
      summary: "Set clear purpose and access expectations for internal/external users.",
      tasks: [
        "Document intended portal audiences",
        "Define authentication and support handoff language",
        "Add secure sign-in CTA and support contact path",
      ],
    },
  ],
  community: [
    {
      heading: "Program Narrative",
      summary: "Present mission and impact outcomes for community initiatives in scannable sections.",
      tasks: [
        "Break long text into outcome-focused content blocks",
        "Add measurable impact KPIs where available",
        "Prepare supporting event/community photography list",
      ],
    },
  ],
  coalition: [
    {
      heading: "Campaign Landing Experience",
      summary: "Build a focused coalition page for education resources and outreach visibility.",
      tasks: [
        "Define event calendar and outreach resource modules",
        "Prepare content governance for recurring campaign updates",
        "Capture accessibility requirements for community audiences",
      ],
    },
  ],
  contact: [
    {
      heading: "Secure Contact Pipeline",
      summary: "Modernize form UX with robust validation and anti-abuse controls.",
      tasks: [
        "Define required fields and inquiry types",
        "Implement server-side validation contract",
        "Add privacy notice and response-time expectations",
      ],
    },
  ],
};

export const trustStats: StatItem[] = [
  { label: "Years in business", value: "14+" },
  { label: "Leadership experience", value: "60+ years" },
  { label: "Audited legacy images", value: "89" },
  { label: "Target pages in migration", value: "7" },
];

export const servicePreviews: ServicePreview[] = [
  {
    slug: "program-management-strategic-planning",
    title: "Program Management and Strategic Planning",
    description:
      "BCS supports project lifecycle planning, execution oversight, and measurable reporting for public and private programs.",
    highlights: [
      "Current-state analysis and performance benchmarking",
      "Roadmap development tied to budget and operations",
      "Governance rhythm for leadership decision-making",
    ],
    imageSrc: "/images/services-1-925x375.png",
    imageAlt: "Program management themed legacy service visual from BCS site audit.",
  },
  {
    slug: "enterprise-risk-information-assurance",
    title: "Enterprise Risk and Information Assurance",
    description:
      "Risk-intelligent practices that connect technology, process, and governance to reduce exposure while enabling delivery.",
    highlights: [
      "Risk identification and cross-functional mitigation planning",
      "Security and compliance support for regulated environments",
      "Operational controls aligned with organizational objectives",
    ],
    imageSrc: "/images/services-2-925x375.png",
    imageAlt: "Enterprise risk service visual from audited BCS assets.",
  },
  {
    slug: "community-health-equity-initiatives",
    title: "Community and Health Equity Initiatives",
    description:
      "Coalition-based engagement programs that combine outreach, education, and operational support for underserved communities.",
    highlights: [
      "Community partnership activation with trusted messengers",
      "Outcome-focused event and campaign operations",
      "Alignment to local and federal health guidance",
    ],
    imageSrc: "/images/services-3-925x375.png",
    imageAlt: "Community services visual selected from audited BCS imagery.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "program-management-strategic-planning",
    title: "Program Management and Strategic Planning",
    summary:
      "BCS delivers structured program leadership from planning through execution using measurable governance and lifecycle control.",
    outcomes: [
      "Improved schedule and budget visibility for leadership teams",
      "Clear ownership model across workstreams and stakeholders",
      "Reduced delivery risk through proactive milestone management",
    ],
    deliveryApproach: [
      "Current-state assessment and baseline performance analysis",
      "Roadmap design with reporting cadence and success criteria",
      "Execution governance with routine review and adjustment cycles",
    ],
    sectors: ["Federal programs", "Municipal operations", "Commercial enterprise services"],
  },
  {
    slug: "enterprise-risk-information-assurance",
    title: "Enterprise Risk and Information Assurance",
    summary:
      "BCS supports risk-intelligent operations by aligning governance, controls, and technology strategy to mission outcomes.",
    outcomes: [
      "Improved risk visibility across organizational silos",
      "Stronger policy-to-execution alignment for compliance programs",
      "Higher operational confidence in security-sensitive environments",
    ],
    deliveryApproach: [
      "Risk mapping and threat-informed prioritization workshops",
      "Control design and implementation planning with business owners",
      "Performance monitoring tied to decision-ready reporting",
    ],
    sectors: ["Government and regulated programs", "Technology service environments", "Hybrid enterprise operations"],
  },
  {
    slug: "community-health-equity-initiatives",
    title: "Community and Health Equity Initiatives",
    summary:
      "BCS coordinates coalition-driven outreach programs that combine education, access support, and repeatable community delivery operations.",
    outcomes: [
      "Expanded outreach coverage for underrepresented communities",
      "Improved program consistency through repeatable coalition operations",
      "Stronger cross-partner collaboration around measurable goals",
    ],
    deliveryApproach: [
      "Community partnership activation with trusted organizations",
      "Campaign operations model for education and event delivery",
      "Continuous improvement loop with outcome and participation tracking",
    ],
    sectors: ["Public health initiatives", "Community-based organizations", "Cross-sector coalition programs"],
  },
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "Ronnell R. Bright",
    role: "Managing Partner | Chief Consulting Officer",
    focus: "Program management, strategic leadership, and client delivery strategy.",
    detail: "Primary contact listed in capability summary (December 2024).",
  },
  {
    name: "Captain R. E. Williams, USN (Ret.) Ph.D.",
    role: "Partner | Chief Operating Officer",
    focus: "Operational governance and mission-oriented program execution.",
    detail: "Executive leadership profile from capability summary team matrix.",
  },
  {
    name: "Heath Kolman",
    role: "Information Technology Lead",
    focus: "Technology operations and modernization support across client portfolios.",
    detail: "Capability summary role focus: information technology.",
  },
  {
    name: "Marullus Williams",
    role: "Cloud Services and Cyber Security",
    focus: "Cloud advisory, cybersecurity posture, and resilient infrastructure strategy.",
    detail: "Capability summary role focus: cloud and cyber.",
  },
];

export const certifications = ["TX HUB", "DBE", "AABE", "ESBE", "MBE", "SBE"];

export const commercialCapabilities: CommercialCapability[] = [
  {
    title: "Core competency portfolio",
    details: [
      "Program management and strategic planning",
      "Enterprise risk management and information assurance",
      "Professional and administrative support services",
      "Emergency management, disaster relief, and health technology support",
    ],
  },
  {
    title: "Past-performance footprint",
    details: [
      "NASA KISS contract support environment",
      "Department of Homeland Security and FEMA delivery support",
      "San Antonio Airport System technology planning and operations",
      "Healthcare and community engagement initiatives under Good Health Wins",
    ],
  },
  {
    title: "Operational differentiators",
    details: [
      "Small and minority business certifications with local Texas presence",
      "Teaming model spanning cybersecurity, cloud, and administration",
      "Lifecycle approach from strategy through implementation",
      "Six Sigma and program-management-aligned delivery methods",
    ],
  },
];

export const commercialSummaryStats: StatItem[] = [
  { label: "Capability summary length", value: "15 pages" },
  { label: "Combined leadership experience", value: "60+ years" },
  { label: "Business history represented", value: "14+ years" },
  { label: "Primary competency domains", value: "5" },
];

export const communityImpactStats: StatItem[] = [
  { label: "Coalition advocacy pillars", value: "4" },
  { label: "Community practice attendees", value: "~1000/session" },
  { label: "Activated chapter partners", value: "4+" },
  { label: "Core impact tracks", value: "3" },
];

export const communityInitiatives: CommunityInitiative[] = [
  {
    title: "Health and wellness access",
    highlights: [
      "Community screening support including blood pressure and glucose checks",
      "Immunization education through trusted neighborhood partnerships",
      "Collaborative outreach with health-focused CBO networks",
    ],
  },
  {
    title: "Nutrition and food security",
    highlights: [
      "Partnership model aligned with local food security organizations",
      "Event-level resource distribution tied to community need",
      "Barrier reduction strategy for transportation and access",
    ],
  },
  {
    title: "Civic and social engagement",
    highlights: [
      "Civic participation support through voter engagement activities",
      "Coalition-based community advocacy events",
      "Sustained outreach model centered on underrepresented populations",
    ],
  },
];

export const coalitionExecutionTracks: CommunityInitiative[] = [
  {
    title: "Administration and alignment",
    highlights: [
      "Program alignment with CDC and local public health guidance",
      "Operational documentation for recurring campaign cycles",
      "Schedule coordination tied to immunization outreach windows",
    ],
  },
  {
    title: "Engagement and advocacy",
    highlights: [
      "Trusted messenger campaigns for vaccine confidence",
      "Incentive and transportation support where barriers are highest",
      "Localized messaging for hard-to-reach populations",
    ],
  },
  {
    title: "Sustainable community delivery",
    highlights: [
      "Drive-through and in-home outreach models where appropriate",
      "Community-of-practice cadence for cross-partner learning",
      "Repeatable coalition operations for long-term health equity impact",
    ],
  },
];

export const imageReplacementPriorities: ImageReplacementPriority[] = [
  {
    asset: "Contact visual",
    currentResolution: "510x375",
    risk: "High",
    action: "Replace with 1600px+ source or responsive photo set before launch.",
  },
  {
    asset: "About visual",
    currentResolution: "686x435",
    risk: "High",
    action: "Replace with higher-resolution original and deliver AVIF/WebP variants.",
  },
  {
    asset: "Service visuals (3 assets)",
    currentResolution: "925x375",
    risk: "Medium",
    action: "Use 2x source images to avoid softness on wide and retina layouts.",
  },
  {
    asset: "Legacy header banner",
    currentResolution: "1027x204",
    risk: "Medium",
    action: "Redesign as SVG/typographic hero treatment instead of stretching bitmap.",
  },
];

export const portalReadinessStats: StatItem[] = [
  { label: "Access model tracks", value: "3" },
  { label: "Security controls staged", value: "6+" },
  { label: "Support response objective", value: "1 business day" },
  { label: "Role onboarding paths", value: "4" },
];

export const portalPrograms: ProgramHighlight[] = [
  {
    title: "Role-based entry paths",
    summary: "Separate access journeys for prime contractors, subs, teaming partners, and internal staff.",
    bullets: [
      "Role-specific sign-in guidance and document expectations",
      "Least-privilege defaults for authenticated sections",
      "Clear escalation path when access is denied or delayed",
    ],
  },
  {
    title: "Operational support and compliance",
    summary: "Portal support structure designed for reliability, traceability, and policy alignment.",
    bullets: [
      "Support intake categories mapped to contract and portal incidents",
      "Audit-ready activity logging and response tracking",
      "Acceptable-use, privacy, and data handling notices at entry points",
    ],
  },
  {
    title: "Security and resilience controls",
    summary: "Hardening controls applied at both application and process layers.",
    bullets: [
      "MFA requirement for privileged roles",
      "Rate limiting and abuse detection for authentication surfaces",
      "Documented incident response workflow for suspicious activity",
    ],
  },
];

export const coalitionProgramGoals: ProgramHighlight[] = [
  {
    title: "Raise immunization confidence",
    summary: "Expand trusted outreach and reduce misinformation barriers in vulnerable communities.",
    bullets: [
      "Trusted messenger enablement and recurring education touchpoints",
      "Community events coordinated with immunization opportunity windows",
      "Localized messaging designed for accessibility and cultural relevance",
    ],
  },
  {
    title: "Advance health equity delivery",
    summary: "Bridge healthcare access gaps through partnerships and community-focused logistics.",
    bullets: [
      "Transportation and incentive support where barriers persist",
      "Integrated wellness and vaccine education programming",
      "Cross-organization coordination with public health stakeholders",
    ],
  },
  {
    title: "Sustain coalition capacity",
    summary: "Build repeatable campaign operations that remain effective beyond one funding cycle.",
    bullets: [
      "Operational playbooks for recurring campaign execution",
      "Cadence-driven coalition meetings and accountability checkpoints",
      "Performance tracking tied to measurable community outcomes",
    ],
  },
];

export const commercialContractHighlights: ProgramHighlight[] = [
  {
    title: "Federal and aerospace programs",
    summary: "Support history across federal and aerospace delivery environments.",
    bullets: [
      "NASA KISS program support references",
      "DHS and FEMA aligned project participation",
      "Clearance-oriented operational readiness",
    ],
  },
  {
    title: "Municipal and airport systems",
    summary: "Technology planning and operational support for municipal and airport entities.",
    bullets: [
      "San Antonio Airport System planning and support engagements",
      "Preventive maintenance and IT advisory scopes",
      "Program-level coordination across multi-year initiatives",
    ],
  },
  {
    title: "Health and community program delivery",
    summary: "Community-centered outreach and operations linked to health equity goals.",
    bullets: [
      "Good Health Wins coalition program administration",
      "Partner-driven event and outreach coordination",
      "Operational model for recurring community engagement",
    ],
  },
];

export const aboutSectionLinks: SectionLink[] = [
  {
    href: "/about/company-story",
    title: "Company Story",
    summary: "History, mission alignment, and growth timeline.",
  },
  {
    href: "/about/leadership",
    title: "Leadership",
    summary: "Leadership profiles, operating model, and teaming philosophy.",
  },
  {
    href: "/about/certifications",
    title: "Certifications",
    summary: "Business certifications, identifiers, and capability codes.",
  },
];

export const commercialSectionLinks: SectionLink[] = [
  {
    href: "/commercial/capabilities",
    title: "Capabilities",
    summary: "Core domains, delivery methods, and solution focus areas.",
  },
  {
    href: "/commercial/past-performance",
    title: "Past Performance",
    summary: "Representative engagements across federal, municipal, and community programs.",
  },
  {
    href: "/commercial/certifications",
    title: "Commercial Certifications",
    summary: "Certification profile and identifiers used in procurement review.",
  },
];

export const aboutCompanyStoryHighlights: ProgramHighlight[] = [
  {
    title: "Business development timeline",
    summary: "BCS has evolved from early consulting operations into a mature delivery and teaming organization.",
    bullets: [
      "Founded in 2007 with progressive growth over 14+ years",
      "Formalized and expanded through public and private delivery partnerships",
      "Community coalition operations added to broaden mission impact",
    ],
  },
  {
    title: "Mission and operating focus",
    summary: "Delivery model combines governance discipline, technology support, and community-centered execution.",
    bullets: [
      "Program and project leadership tied to measurable outcomes",
      "Risk-informed planning and operational controls",
      "Inclusive collaboration model across clients and partner organizations",
    ],
  },
  {
    title: "Why clients engage BCS",
    summary: "BCS emphasizes accountable execution, trusted relationships, and long-term operational value.",
    bullets: [
      "Decision-ready reporting for leadership and stakeholders",
      "Practical implementation support beyond strategy recommendations",
      "Partnership continuity across multi-phase engagements",
    ],
  },
];

export const leadershipOperatingModel: ProgramHighlight[] = [
  {
    title: "Executive delivery oversight",
    summary: "Leadership participation remains active through planning, execution, and review cycles.",
    bullets: [
      "Cross-functional leadership collaboration on priority engagements",
      "Direct involvement in high-impact risk and program decisions",
      "Stakeholder communication model for transparent progress tracking",
    ],
  },
  {
    title: "Teaming and partner integration",
    summary: "BCS combines internal leadership with partner capabilities to deliver complete solution coverage.",
    bullets: [
      "Defined role boundaries across BCS and partner entities",
      "Sector-specific teaming for cloud, cyber, and administration",
      "Coordinated delivery standards across all participating teams",
    ],
  },
  {
    title: "Leadership principles in practice",
    summary: "Operational leadership is anchored in accountability, adaptability, and client trust.",
    bullets: [
      "Clear ownership and escalation pathways",
      "Continuous improvement and lessons-learned integration",
      "Customer satisfaction as a central success metric",
    ],
  },
];

export const businessCredentials: CredentialRecord[] = [
  { label: "DUNS", value: "967732145" },
  { label: "CAGE", value: "6BS76" },
  { label: "Certification set", value: "TX HUB, DBE, AABE, ESBE, MBE, SBE" },
];

export const naicsCodes: CredentialRecord[] = [
  { label: "541519", value: "Other Computer Related Services" },
  { label: "541611", value: "Administrative Management and General Management Consulting Services" },
  { label: "541612", value: "Human Resources and Executive Search Consulting Services" },
  { label: "541613", value: "Marketing Consulting Services" },
  { label: "541614", value: "Process, Physical Distribution, and Logistics Consulting Services" },
  { label: "541618", value: "Other Management Consulting Services" },
  { label: "561110", value: "Office Administration Services" },
];

export const commercialCapabilityTracks: ProgramHighlight[] = [
  {
    title: "Management and program delivery",
    summary: "Execution support across program planning, lifecycle tracking, and business operations.",
    bullets: [
      "Program governance and reporting structures",
      "Strategic planning and execution alignment",
      "Administrative support integration for operational continuity",
    ],
  },
  {
    title: "Technology and risk services",
    summary: "Technology-enabled delivery backed by risk management and information assurance practices.",
    bullets: [
      "Risk-aware technology planning and implementation support",
      "Information assurance alignment across regulated environments",
      "Operational controls for enterprise and project-level risk",
    ],
  },
  {
    title: "Community and emergency support systems",
    summary: "Public-impact support models for health, emergency, and coalition programs.",
    bullets: [
      "Community outreach operations and coordination frameworks",
      "Emergency management and disaster support readiness",
      "Health and wellness technology support pathways",
    ],
  },
];
