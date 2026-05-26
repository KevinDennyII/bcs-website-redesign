import styles from "../v2.module.css";

export default function V2CommercialPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Commercial Experience</p>
        <h1>A pursuit-ready commercial story, not a slide deck on a webpage.</h1>
        <p>
          The commercial V2 concept reframes capability, past performance, and certifications into evaluation modules
          that align with buyer due diligence sequences.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Evaluation modules</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Capability map</h3>
            <p>Interactive domain map showing where BCS leads, partners, and scales.</p>
          </article>
          <article className={styles.card}>
            <h3>Past performance evidence</h3>
            <p>Outcome-led case snapshots grouped by sector and contract complexity.</p>
          </article>
          <article className={styles.card}>
            <h3>Compliance profile</h3>
            <p>Certifications, IDs, and procurement data in one procurement-ready panel.</p>
          </article>
        </div>
      </section>
    </>
  );
}
