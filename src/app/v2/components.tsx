"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { v2Nav } from "./content";
import styles from "./v2.module.css";

type V2FrameProps = {
  children: ReactNode;
};

export function V2Frame({ children }: V2FrameProps) {
  const pathname = usePathname();

  return (
    <div className={styles.v2Root}>
      <header className={styles.topBar}>
        <div className={`${styles.topBarInner} ${styles.shell}`}>
          <div className={styles.brand}>
            <Link href="/v2">BCS Reimagined Prototype</Link>
            <small>Experimental direction - local-only review</small>
          </div>
          <nav className={styles.nav} aria-label="V2 navigation">
            {v2Nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/v2" && pathname.startsWith(`${item.href}/`));
              return (
                <Link key={item.href} href={item.href} data-active={active ? "true" : "false"}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className={`${styles.main} ${styles.shell}`}>{children}</main>
      <footer className={`${styles.footer} ${styles.shell}`}>
        Reimagined V2 prototype experience. Existing production-track pages remain available outside `/v2`.
      </footer>
    </div>
  );
}
