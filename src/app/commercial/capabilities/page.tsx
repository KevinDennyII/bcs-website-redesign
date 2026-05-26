import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { commercialCapabilityTracks } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "Commercial Capabilities",
  description: "Commercial capability tracks and solution focus areas for BCS.",
};

export default function CommercialCapabilitiesPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Commercial Capabilities</h1>
        <p className={styles.summary}>
          Capability tracks below summarize how BCS aligns management, risk, technology, and community operations for
          commercial and public-impact engagements.
        </p>
      </header>

      <section className={styles.grid} aria-label="Commercial capability tracks">
        {commercialCapabilityTracks.map((track) => (
          <article key={track.title} className={styles.card}>
            <h2>{track.title}</h2>
            <p>{track.summary}</p>
            <ul>
              {track.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CTABanner
        title="Review representative past performance"
        body="Past performance references are organized by delivery environment for faster opportunity alignment."
        ctaHref="/commercial/past-performance"
        ctaLabel="Open past performance"
      />
    </main>
  );
}
