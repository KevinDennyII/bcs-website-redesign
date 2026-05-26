import { notFound } from "next/navigation";
import { v2Services } from "../../content";
import styles from "../../v2.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return v2Services.map((service) => ({ slug: service.slug }));
}

export default async function V2ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = v2Services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Service Journey</p>
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
      </section>

      <section className={styles.section}>
        <h2>Designed outcomes</h2>
        <div className={styles.cards}>
          {service.outcomes.map((outcome) => (
            <article key={outcome} className={styles.card}>
              <h3>{outcome}</h3>
              <p>
                This outcome is supported through a strategy-to-execution model with explicit ownership, reporting, and
                measurable checkpoints.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
