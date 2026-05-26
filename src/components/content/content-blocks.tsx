import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./content-blocks.module.css";

type ContentBlockProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

type StatItem = {
  label: string;
  value: string;
};

type StatStripProps = {
  items: StatItem[];
};

type ServiceCardProps = {
  title: string;
  description: string;
  highlights: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  href?: string;
  linkLabel?: string;
};

type LeadershipCardProps = {
  name: string;
  role: string;
  focus: string;
  detail: string;
};

type CertificationBadgeProps = {
  label: string;
};

type CTABannerProps = {
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  note?: string;
};

export function ContentBlock({ title, intro, children }: ContentBlockProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
      {children}
    </section>
  );
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <div className={styles.stats}>
      {items.map((item) => (
        <article key={`${item.label}-${item.value}`} className={styles.statCard}>
          <p className={styles.statValue}>{item.value}</p>
          <p className={styles.statLabel}>{item.label}</p>
        </article>
      ))}
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  imageWidth = 925,
  imageHeight = 375,
  href,
  linkLabel = "View service details",
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      {imageSrc ? (
        <Image
          className={styles.media}
          src={imageSrc}
          alt={imageAlt ?? `${title} supporting visual`}
          width={imageWidth}
          height={imageHeight}
        />
      ) : null}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{description}</p>
      <ul className={styles.cardList}>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      {href ? (
        <Link className={styles.cardLink} href={href}>
          {linkLabel}
        </Link>
      ) : null}
    </article>
  );
}

export function LeadershipCard({ name, role, focus, detail }: LeadershipCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardBody}>
        <strong>{role}</strong>
      </p>
      <p className={styles.cardBody}>{focus}</p>
      <p className={styles.meta}>{detail}</p>
    </article>
  );
}

export function CertificationBadge({ label }: CertificationBadgeProps) {
  return <span className={styles.badge}>{label}</span>;
}

export function CTABanner({ title, body, ctaHref, ctaLabel, note }: CTABannerProps) {
  return (
    <aside className={styles.banner} aria-label={title}>
      <h2 className={styles.bannerTitle}>{title}</h2>
      <p className={styles.bannerText}>{body}</p>
      <Link className={styles.bannerLink} href={ctaHref}>
        {ctaLabel}
      </Link>
      {note ? <p className={styles.meta}>{note}</p> : null}
    </aside>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.cards}>{children}</div>;
}

export function BadgeRow({ children }: { children: ReactNode }) {
  return <div className={styles.badges}>{children}</div>;
}
