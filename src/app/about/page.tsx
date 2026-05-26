import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeRow,
  CTABanner,
  CardGrid,
  CertificationBadge,
  ContentBlock,
  LeadershipCard,
  ServiceCard,
} from "@/components/content/content-blocks";
import { aboutSectionLinks, certifications, leadershipProfiles } from "@/content/site-content";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About page migration plan for the BCS website modernization.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>About Bright Consulting Solutions</h1>
        <p className={styles.intro}>
          BCS brings cross-sector experience in program management, risk management, technology services, emergency
          operations, and healthcare-related community support. This phase translates narrative-heavy source material
          into clear, outcome-oriented content blocks.
        </p>
        <Image
          className={styles.image}
          src="/images/about-hub-686x435.png"
          alt="Legacy About page supporting image from BCS site audit."
          width={686}
          height={435}
        />
      </header>

      <ContentBlock
        title="Leadership snapshot"
        intro="Leadership roles below are based on the BCS capability summary and current site content."
      >
        <CardGrid>
          {leadershipProfiles.map((profile) => (
            <LeadershipCard key={profile.name} {...profile} />
          ))}
        </CardGrid>
      </ContentBlock>

      <ContentBlock
        title="Business certifications"
        intro="Final certification visuals and registry links will be attached in the production content pass."
      >
        <BadgeRow>
          {certifications.map((certification) => (
            <CertificationBadge key={certification} label={certification} />
          ))}
        </BadgeRow>
      </ContentBlock>

      <ContentBlock
        title="Explore About subsections"
        intro="Use the dedicated pages below for full details on company story, leadership model, and certifications."
      >
        <CardGrid>
          {aboutSectionLinks.map((section) => (
            <ServiceCard
              key={section.href}
              title={section.title}
              description={section.summary}
              highlights={["Open full section page"]}
              href={section.href}
              linkLabel="View section"
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Need the full corporate capability narrative?"
        body="The commercial capability summary is being mapped into timeline, competency, and past-performance sections for this page."
        ctaHref="/services"
        ctaLabel="View service capabilities"
      />
    </main>
  );
}
