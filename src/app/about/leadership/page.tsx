import type { Metadata } from "next";
import { CTABanner } from "@/components/content/content-blocks";
import { leadershipOperatingModel, leadershipProfiles } from "@/content/site-content";
import styles from "../../section-detail.module.css";

export const metadata: Metadata = {
  title: "About Leadership",
  description: "Leadership profiles and operating model for BCS delivery.",
};

export default function AboutLeadershipPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Leadership</h1>
        <p className={styles.summary}>
          BCS leadership blends executive consulting, operational governance, and technology expertise to maintain
          accountable delivery across complex engagements.
        </p>
      </header>

      <section className={styles.grid} aria-label="Leadership operating model">
        {leadershipOperatingModel.map((item) => (
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

      <section className={styles.list} aria-label="Leadership profiles">
        {leadershipProfiles.map((profile) => (
          <article key={profile.name} className={styles.listItem}>
            <p className={styles.label}>{profile.role}</p>
            <p className={styles.value}>{profile.name}</p>
            <p>{profile.focus}</p>
          </article>
        ))}
      </section>

      <CTABanner
        title="View certifications and identifiers"
        body="Business certifications and procurement-facing identifiers are available in the certifications section."
        ctaHref="/about/certifications"
        ctaLabel="Open certifications section"
      />
    </main>
  );
}
