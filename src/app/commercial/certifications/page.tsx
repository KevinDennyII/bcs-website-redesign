import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { businessCredentials, certifications, naicsCodes } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "Commercial Certifications",
  description: "Commercial certification and identifier references for BCS teaming review.",
};

export default function CommercialCertificationsPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Commercial Certifications</h1>
        <p className={styles.summary}>
          Certification references, identifiers, and NAICS mappings below support procurement and teaming due diligence.
        </p>
      </header>

      <section className={styles.list} aria-label="Certification list">
        {certifications.map((certification) => (
          <article key={certification} className={styles.listItem}>
            <p className={styles.label}>Certification</p>
            <p className={styles.value}>{certification}</p>
          </article>
        ))}
      </section>

      <section className={styles.list} aria-label="Business identifiers">
        {businessCredentials.map((credential) => (
          <article key={credential.label} className={styles.listItem}>
            <p className={styles.label}>{credential.label}</p>
            <p className={styles.value}>{credential.value}</p>
          </article>
        ))}
      </section>

      <section className={styles.list} aria-label="NAICS mapping">
        {naicsCodes.map((code) => (
          <article key={code.label} className={styles.listItem}>
            <p className={styles.label}>NAICS {code.label}</p>
            <p className={styles.value}>{code.value}</p>
          </article>
        ))}
      </section>

      <CTABanner
        title="Discuss an active opportunity"
        body="If you need capability and certification alignment for a current pursuit, route it through the secure contact workflow."
        ctaHref="/contact"
        ctaLabel="Contact BCS"
      />
    </main>
  );
}
