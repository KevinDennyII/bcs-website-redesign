import styles from "../v2.module.css";

export default function V2CommunityPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Community Solutions</p>
        <h1>Community operations designed as a measurable system.</h1>
        <p>
          V2 organizes community work into delivery pipelines: partnership activation, outreach operations, and impact
          tracking with transparent KPI models.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Execution lanes</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Partnership network</h3>
            <p>Partner directory with role ownership and activation status.</p>
          </article>
          <article className={styles.card}>
            <h3>Program operations</h3>
            <p>Reusable operating cadence for event planning, staffing, and reporting.</p>
          </article>
          <article className={styles.card}>
            <h3>Impact dashboard</h3>
            <p>Track participation, equity outcomes, and sustained engagement over time.</p>
          </article>
        </div>
      </section>
    </>
  );
}
