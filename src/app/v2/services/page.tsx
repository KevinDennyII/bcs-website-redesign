import Link from "next/link";
import { v2Services } from "../content";
import styles from "../v2.module.css";

export default function V2ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>V2 Services</p>
        <h1>Outcome-led service architecture</h1>
        <p>
          This reimagined services model starts with measurable client outcomes and only then introduces capability
          mechanics, helping buyers understand value quickly.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Service tracks</h2>
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
              <Link href={`/v2/services/${service.slug}`}>See detail page</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
