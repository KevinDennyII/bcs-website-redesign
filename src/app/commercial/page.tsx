import type { Metadata } from "next";
import {
  BadgeRow,
  CTABanner,
  CardGrid,
  CertificationBadge,
  ContentBlock,
  ServiceCard,
  StatStrip,
} from "@/components/content/content-blocks";
import {
  certifications,
  commercialSectionLinks,
  commercialCapabilities,
  commercialContractHighlights,
  commercialSummaryStats,
} from "@/content/site-content";
import styles from "./commercial.module.css";

export const metadata: Metadata = {
  title: "Commercial",
  description: "Commercial capability overview derived from the BCS capability summary.",
};

export default function CommercialPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Commercial Capability Overview</h1>
        <p className={styles.intro}>
          This section translates the BCS 15-page capability summary into a structured, web-ready format that supports
          teaming discussions, credibility review, and service alignment.
        </p>
        <p className={styles.meta}>Source: BCS Team Corporate Capability Summary (December 2024).</p>
      </header>

      <ContentBlock title="Capability snapshot" intro="High-level indicators extracted from the commercial summary.">
        <StatStrip items={commercialSummaryStats} />
      </ContentBlock>

      <ContentBlock
        title="Commercial focus areas"
        intro="These cards map the most recurring themes from the capability deck into concise web modules."
      >
        <CardGrid>
          {commercialCapabilities.map((capability) => (
            <ServiceCard
              key={capability.title}
              title={capability.title}
              description="Commercial delivery readiness and evidence-driven execution support."
              highlights={capability.details}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <ContentBlock
        title="Representative delivery highlights"
        intro="Program references are grouped by delivery environment to support faster teaming evaluation."
      >
        <CardGrid>
          {commercialContractHighlights.map((highlight) => (
            <ServiceCard
              key={highlight.title}
              title={highlight.title}
              description={highlight.summary}
              highlights={highlight.bullets}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <ContentBlock
        title="Certification profile"
        intro="Formal certification references from the capability summary are retained here for procurement and teaming review."
      >
        <BadgeRow>
          {certifications.map((certification) => (
            <CertificationBadge key={certification} label={certification} />
          ))}
        </BadgeRow>
      </ContentBlock>

      <ContentBlock
        title="Explore commercial subsections"
        intro="Open dedicated capability, performance, and certification pages for deeper review and procurement readiness."
      >
        <CardGrid>
          {commercialSectionLinks.map((section) => (
            <ServiceCard
              key={section.href}
              title={section.title}
              description={section.summary}
              highlights={["Open detailed subsection"]}
              href={section.href}
              linkLabel="View subsection"
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Discuss commercial teaming opportunities"
        body="If you need support across program management, risk, technology, or administrative operations, use the contact workflow and select your inquiry type."
        ctaHref="/contact"
        ctaLabel="Open contact form"
      />
    </main>
  );
}
