import type { Metadata } from "next";
import Image from "next/image";
import {
  CTABanner,
  CardGrid,
  ContentBlock,
  ServiceCard,
  StatStrip,
} from "@/components/content/content-blocks";
import { portalPrograms, portalReadinessStats } from "@/content/site-content";
import styles from "./portal.module.css";

export const metadata: Metadata = {
  title: "BCS Team Portal",
  description: "BCS Team Portal modernization plan.",
};

export default function BCSTeamPortalPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>BCS Team Portal</h1>
        <p className={styles.intro}>
          The portal section is being prepared for role-specific entry points, support routing, and secure access
          instructions for internal and partner users.
        </p>
        <Image
          className={styles.image}
          src="/images/header-legacy-1027x204.png"
          alt="Legacy BCS portal banner used as transitional visual."
          width={1027}
          height={204}
        />
      </header>

      <ContentBlock
        title="Portal readiness snapshot"
        intro="Current implementation targets secure onboarding, role-aware access, and rapid support routing."
      >
        <StatStrip items={portalReadinessStats} />
      </ContentBlock>

      <ContentBlock
        title="Portal implementation lanes"
        intro="Each lane below will map to concrete routes and secure user journeys in the next build cycle."
      >
        <CardGrid>
          {portalPrograms.map((program) => (
            <ServiceCard
              key={program.title}
              title={program.title}
              description={program.summary}
              highlights={program.bullets}
            />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Portal access rollout in progress"
        body="Authentication and role assignment will be enabled after final policy review, identity integration, and onboarding workflow approval."
        ctaHref="/contact"
        ctaLabel="Request portal assistance"
      />
    </main>
  );
}
