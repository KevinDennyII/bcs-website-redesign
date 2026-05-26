import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { commercialContractHighlights } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "Commercial Past Performance",
  description: "Representative BCS past performance groupings for commercial review.",
};

export default function CommercialPastPerformancePage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Past Performance</h1>
        <p className={styles.summary}>
          Engagement references are grouped by domain to support quick review of operational fit, sector familiarity,
          and delivery context.
        </p>
      </header>

      <section className={styles.grid} aria-label="Past performance highlights">
        {commercialContractHighlights.map((highlight) => (
          <article key={highlight.title} className={styles.card}>
            <h2>{highlight.title}</h2>
            <p>{highlight.summary}</p>
            <ul>
              {highlight.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CTABanner
        title="Need certification and identifier references?"
        body="Commercial certifications and business identifiers are listed in the dedicated certification section."
        ctaHref="/commercial/certifications"
        ctaLabel="Open commercial certifications"
      />
    </main>
  );
}
