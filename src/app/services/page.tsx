import type { Metadata } from "next";
import { CTABanner, CardGrid, ContentBlock, ServiceCard } from "@/components/content/content-blocks";
import { servicePreviews } from "@/content/site-content";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Services page migration plan for the BCS website modernization.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Professional Services</h1>
        <p className={styles.intro}>
          Services are being standardized into reusable, industry-focused blocks covering strategy, risk, technology,
          and community operations. The cards below are seeded from audited legacy content.
        </p>
        <p className={styles.flag}>
          Image quality note: current service visuals are mid-resolution legacy assets and are flagged for 2x source
          replacement in the final design pass.
        </p>
      </header>

      <ContentBlock
        title="Service domains"
        intro="Each service card will expand into dedicated sections with outcomes, process model, and representative engagements."
      >
        <CardGrid>
          {servicePreviews.map((service) => (
            <ServiceCard key={service.title} {...service} href={`/services/${service.slug}`} />
          ))}
        </CardGrid>
      </ContentBlock>

      <CTABanner
        title="Review commercial capability details"
        body="Explore the dedicated commercial page for capability summary highlights, contract references, and certification profile details."
        ctaHref="/commercial"
        ctaLabel="Open commercial overview"
      />
    </main>
  );
}
