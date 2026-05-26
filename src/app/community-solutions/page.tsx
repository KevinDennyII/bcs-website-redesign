import type { Metadata } from "next";
import {
  CTABanner,
  CardGrid,
  ContentBlock,
  ServiceCard,
  StatStrip,
} from "@/components/content/content-blocks";
import {
  coalitionExecutionTracks,
  communityImpactStats,
  communityInitiatives,
} from "@/content/site-content";
import styles from "../simple-page.module.css";

export const metadata: Metadata = {
  title: "Community Solutions",
  description: "Community Solutions page migration plan for the BCS redesign.",
};

export default function CommunitySolutionsPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Community Solutions</h1>
        <p className={styles.intro}>
          Bright Community Solutions focuses on education, healthcare access, nutrition and food security, information
          technology, and emergency management for underserved populations.
        </p>
      </header>

      <ContentBlock
        title="Current modernization direction"
        intro="Source content from the current page has been normalized into modular sections for mission, vision, core activities, and measurable impact."
      >
        <StatStrip items={communityImpactStats} />
      </ContentBlock>

      <ContentBlock
        title="Community impact tracks"
        intro="These tracks are grounded in existing BCS community narrative and are being expanded into detailed program pages."
      >
        <CardGrid>
          {communityInitiatives.map((initiative) => (
            <ServiceCard
              key={initiative.title}
              title={initiative.title}
              description="Program implementation lane for community operations and outreach."
              highlights={initiative.highlights}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <ContentBlock
        title="Delivery governance model"
        intro="Community solution delivery is coordinated through repeatable planning, engagement, and sustainability practices."
      >
        <CardGrid>
          {coalitionExecutionTracks.map((track) => (
            <ServiceCard
              key={track.title}
              title={track.title}
              description="Execution framework used to keep community initiatives consistent and measurable."
              highlights={track.highlights}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Coalition outreach content is expanding"
        body="The Good Health Wins coalition narrative is being connected to this section with dedicated campaign modules and recurring update governance."
        ctaHref="/good-health-wins-vaccine-education"
        ctaLabel="Explore coalition page"
      />
    </main>
  );
}
