import Link from "next/link";
import { v2Services, v2Stats } from "./content";
import styles from "./v2.module.css";

export default function V2HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Reimagined Consulting Experience</p>
        <h1>A strategy-first digital experience designed for decision makers, not site maps.</h1>
        <p>
          This V2 prototype restructures the entire BCS narrative around user intent: what buyers need to understand,
          prove, and act on at each stage of evaluation. The original modernization track is preserved outside `/v2`.
        </p>
      </section>

      <section className={styles.stats} aria-label="BCS snapshot">
        {v2Stats.map((stat) => (
          <article key={stat.label} className={styles.stat}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Core service journeys</h2>
        <p>Each journey uses layered proof, focused outcomes, and direct conversion paths.</p>
        <div className={styles.cards}>
          {v2Services.map((service) => (
            <article key={service.slug} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Link href={`/v2/services/${service.slug}`}>Open journey</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Compare old and new architecture side-by-side</h2>
        <p>
          Keep iterating this reimagined direction locally while maintaining the current implementation. Move forward
          only if stakeholder response and conversion testing support the change.
        </p>
        <Link href="/v2/contact">Review conversion entry point</Link>
      </section>
    </>
  );
}
