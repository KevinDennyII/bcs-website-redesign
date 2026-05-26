import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/content/content-blocks";
import { getServiceDetailBySlug, serviceDetails } from "@/content/site-content";
import styles from "./service-detail.module.css";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetailBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>{service.title}</h1>
        <p className={styles.summary}>{service.summary}</p>
      </header>

      <section className={styles.columns} aria-label="Service details">
        <article className={styles.panel}>
          <h2>Expected outcomes</h2>
          <ul>
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel}>
          <h2>Delivery approach</h2>
          <ul>
            {service.deliveryApproach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.columns} aria-label="Sectors supported">
        <article className={styles.panel}>
          <h2>Sectors supported</h2>
          <ul>
            {service.sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </article>
      </section>

      <CTABanner
        title="Need this service for an active opportunity?"
        body="Use the secure contact flow and select the inquiry type that best matches your teaming or contract need."
        ctaHref="/contact"
        ctaLabel="Contact BCS"
      />
    </main>
  );
}
