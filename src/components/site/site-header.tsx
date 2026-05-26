import Link from "next/link";
import { primaryNav } from "@/content/site-content";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  activePath: string;
};

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} site-shell`}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>Bright Consulting Solutions</span>
          <span className={styles.brandTagline}>IT Governance and Enterprise Risk Management</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((item) => {
            const isNestedMatch = item.href !== "/" && activePath.startsWith(`${item.href}/`);
            const isActive = activePath === item.href || isNestedMatch;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`.trim()}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
