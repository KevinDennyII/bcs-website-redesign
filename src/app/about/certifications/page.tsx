import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { businessCredentials, naicsCodes } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "About Certifications",
  description: "BCS certifications, identifiers, and NAICS references.",
};

export default function AboutCertificationsPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Certifications and Identifiers</h1>
        <p className={styles.summary}>
          These records summarize business credentials and classification codes commonly requested during procurement
          and teaming review.
        </p>
      </header>

      <section className={styles.list} aria-label="Business credentials">
        {businessCredentials.map((credential) => (
          <article key={credential.label} className={styles.listItem}>
            <p className={styles.label}>{credential.label}</p>
            <p className={styles.value}>{credential.value}</p>
            {credential.note ? <p>{credential.note}</p> : null}
          </article>
        ))}
      </section>

      <section className={styles.list} aria-label="NAICS codes">
        {naicsCodes.map((code) => (
          <article key={code.label} className={styles.listItem}>
            <p className={styles.label}>NAICS {code.label}</p>
            <p className={styles.value}>{code.value}</p>
          </article>
        ))}
      </section>

      <CTABanner
        title="Need commercial capability alignment?"
        body="Visit the commercial section for capability tracks, past performance highlights, and teaming context."
        ctaHref="/commercial"
        ctaLabel="Open commercial overview"
      />
    </main>
  );
}
