import styles from "../v2.module.css";

export default function V2PortalPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Portal UX</p>
        <h1>Role-directed portal experience with secure onboarding.</h1>
        <p>
          This concept separates entry flows for primes, subcontractors, partners, and internal teams with explicit
          security expectations and support channels.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Portal components</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Role entry router</h3>
            <p>Guided onboarding to the correct flow before any credential requests.</p>
          </article>
          <article className={styles.card}>
            <h3>Secure access controls</h3>
            <p>MFA-first sign-in, least-privilege roles, and traceable access events.</p>
          </article>
          <article className={styles.card}>
            <h3>Support workflow</h3>
            <p>Escalation paths for access issues and compliance-sensitive incidents.</p>
          </article>
        </div>
      </section>
    </>
  );
}
