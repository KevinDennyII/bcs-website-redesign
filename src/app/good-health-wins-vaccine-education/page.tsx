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
  coalitionProgramGoals,
  communityImpactStats,
} from "@/content/site-content";
import styles from "../simple-page.module.css";

export const metadata: Metadata = {
  title: "Good Health Wins Vaccine Education",
  description: "Coalition page migration plan for Good Health Wins Vaccine Education.",
};

export default function GoodHealthWinsPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Good Health Wins Vaccine Education</h1>
        <p className={styles.intro}>
          This campaign page is being rebuilt for event visibility, resource delivery, and trusted messenger outreach
          support across coalition partners.
        </p>
      </header>

      <ContentBlock
        title="Campaign modules in progress"
        intro="These modules are sourced from the current coalition narrative and will support recurring operational updates."
      >
        <StatStrip items={communityImpactStats} />
      </ContentBlock>

      <ContentBlock
        title="Coalition execution tracks"
        intro="The campaign will be delivered through three operational lanes that tie planning, outreach, and sustainability together."
      >
        <CardGrid>
          {coalitionExecutionTracks.map((track) => (
            <ServiceCard
              key={track.title}
              title={track.title}
              description="Operational workstream aligned to Good Health Wins coalition priorities."
              highlights={track.highlights}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <ContentBlock
        title="Program outcome goals"
        intro="These goals convert current coalition narrative into measurable outcome categories for reporting and continuous improvement."
      >
        <CardGrid>
          {coalitionProgramGoals.map((goal) => (
            <ServiceCard
              key={goal.title}
              title={goal.title}
              description={goal.summary}
              highlights={goal.bullets}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Need coalition support coordination?"
        body="As modernization progresses, coalition leads and partners can route support and campaign update requests through the BCS contact workflow."
        ctaHref="/contact"
        ctaLabel="Contact coalition support"
      />
    </main>
  );
}
