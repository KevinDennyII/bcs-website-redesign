import styles from "../v2.module.css";

export default function V2CoalitionPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Coalition Campaign</p>
        <h1>Campaign-grade coalition UX for recurring public health outreach.</h1>
        <p>
          The coalition redesign concept supports event cadence, trusted messenger resources, and stakeholder alignment
          in a campaign-centered interface.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Campaign primitives</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Event stream</h3>
            <p>Chronological campaign feed with status, ownership, and resource links.</p>
          </article>
          <article className={styles.card}>
            <h3>Message toolkit</h3>
            <p>Audience-specific education kits for coalition representatives.</p>
          </article>
          <article className={styles.card}>
            <h3>Outcome reporting</h3>
            <p>Simple public dashboard that shows campaign momentum and equity impact.</p>
          </article>
        </div>
      </section>
    </>
  );
}
