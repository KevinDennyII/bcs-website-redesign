import type { MigrationSection } from "@/content/site-content";
import styles from "./page-shell.module.css";

type PageShellProps = {
  pageKey: string;
  title: string;
  summary: string;
  sections: MigrationSection[];
};

export function PageShell({ pageKey, title, summary, sections }: PageShellProps) {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <p className={styles.kicker}>BCS Website Modernization</p>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSummary}>{summary}</p>
      </header>

      <section className={styles.sectionGrid} aria-label={`${title} migration tasks`}>
        {sections.map((section) => (
          <article className={styles.card} key={`${pageKey}-${section.heading}`}>
            <h2>{section.heading}</h2>
            <p>{section.summary}</p>
            <ul>
              {section.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
