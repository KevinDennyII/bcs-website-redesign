import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { aboutCompanyStoryHighlights } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "About Company Story",
  description: "Company story, mission context, and growth highlights for BCS.",
};

export default function AboutCompanyStoryPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Company Story</h1>
        <p className={styles.summary}>
          Bright Consulting Solutions has grown through mission-aligned delivery across program management, risk,
          technology, and community initiatives. This page captures the narrative in modular sections for easier review.
        </p>
      </header>

      <section className={styles.grid} aria-label="Company story highlights">
        {aboutCompanyStoryHighlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CTABanner
        title="Review leadership and teaming structure"
        body="Continue to leadership details for executive operating model and partnership delivery approach."
        ctaHref="/about/leadership"
        ctaLabel="Open leadership section"
      />
    </main>
  );
}
