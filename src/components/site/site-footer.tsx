import Link from "next/link";
import styles from "./site-footer.module.css";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} site-shell`}>
        <p className={styles.company}>Bright Consulting Solutions (BCS)</p>
        <div className={styles.links}>
          <Link className={styles.link} href="/services">
            Services
          </Link>
          <Link className={styles.link} href="/community-solutions">
            Community Solutions
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </div>
        <p className={styles.meta}>© {year} BCS Team. Modernization in progress.</p>
      </div>
    </footer>
  );
}
