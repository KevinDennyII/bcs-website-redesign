import Image from "next/image";
import {
  BadgeRow,
  CTABanner,
  CertificationBadge,
  ContentBlock,
  StatStrip,
} from "@/components/content/content-blocks";
import { certifications, imageReplacementPriorities, trustStats } from "@/content/site-content";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Bright Consulting Solutions</p>
        <h1>Mission-driven consulting built for governance, risk, and community outcomes.</h1>
        <p className={styles.lead}>
          This modernization baseline transforms the legacy BCS presence into an accessible, secure, and performance
          focused platform while preserving your core credibility, service depth, and community mission.
        </p>
        <Image
          className={styles.heroImage}
          src="/images/hero-portal-1170x653.png"
          alt="Legacy BCS portal hero image selected from the asset audit."
          width={1170}
          height={653}
          priority
        />
      </header>

      <ContentBlock
        title="Credibility snapshot"
        intro="These values are sourced from the current website and the capability summary deck."
      >
        <StatStrip items={trustStats} />
      </ContentBlock>

      <ContentBlock
        title="Certifications currently represented"
        intro="Certification badges will be upgraded to approved vector assets during final design pass."
      >
        <BadgeRow>
          {certifications.map((certification) => (
            <CertificationBadge key={certification} label={certification} />
          ))}
        </BadgeRow>
      </ContentBlock>

      <ContentBlock
        title="Image replacement priority list"
        intro="Directly from the audit pass, these assets should be upgraded first to avoid pixelation on the new layout."
      >
        <ul>
          {imageReplacementPriorities.map((priority) => (
            <li key={priority.asset}>
              <strong>{priority.asset}</strong> ({priority.currentResolution}, {priority.risk} risk): {priority.action}
            </li>
          ))}
        </ul>
      </ContentBlock>

      <CTABanner
        title="Phase 1 execution underway"
        body="Reusable components and route architecture are now established. Next we will replace draft sections with final copy, approved imagery, and production-ready forms."
        ctaHref="/services"
        ctaLabel="Review service architecture"
        note="Image quality notes: this hero source is medium-risk for full-width retina usage and scheduled for replacement."
      />
    </main>
  );
}
