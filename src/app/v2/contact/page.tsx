import Link from "next/link";
import styles from "../v2.module.css";

export default function V2ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Conversion Entry</p>
        <h1>Decision-ready contact funnel with role intent first.</h1>
        <p>
          V2 contact design puts inquiry intent before data entry, then routes users to the secure contact flow with
          lighter friction and stronger trust cues.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Prototype conversion flow</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Step 1: Identify intent</h3>
            <p>Prime, subcontractor, teaming, career, or general inquiry.</p>
          </article>
          <article className={styles.card}>
            <h3>Step 2: Show relevant proof</h3>
            <p>Contextual certifications and relevant outcomes before form start.</p>
          </article>
          <article className={styles.card}>
            <h3>Step 3: Secure submission</h3>
            <p>Hardened server-action flow with signature-capable webhook delivery.</p>
          </article>
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Use existing secure form now</h2>
        <p>This prototype intentionally reuses the hardened contact pipeline already implemented on the main track.</p>
        <Link href="/contact">Open secure contact form</Link>
      </section>
    </>
  );
}
