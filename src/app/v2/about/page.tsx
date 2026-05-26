import styles from "../v2.module.css";

export default function V2AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About V2</p>
        <h1>Trust architecture over timeline storytelling</h1>
        <p>
          Instead of long narrative blocks, this concept presents leadership credibility, delivery discipline, and
          market relevance in digestible sections built for procurement and executive review.
        </p>
      </section>
      <section className={styles.section}>
        <h2>About page framework</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Leadership model</h3>
            <p>Role-based bios tied to real responsibilities and decision authority.</p>
          </article>
          <article className={styles.card}>
            <h3>Operating principles</h3>
            <p>Clean Code, pragmatic iteration, and security-by-default engineering practices.</p>
          </article>
          <article className={styles.card}>
            <h3>Credential proof</h3>
            <p>Certifications, identifiers, and NAICS codes placed directly beside relevant service claims.</p>
          </article>
        </div>
      </section>
    </>
  );
}
