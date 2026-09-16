import type { CaseStudy as CaseStudyData } from "@/lib/types";
import Button from "@/components/ui/Button";
import Reveal from "@/motion/Reveal";
import PageHero from "./PageHero";
import styles from "./CaseStudy.module.css";

interface CaseStudyProps {
  study: CaseStudyData;
}

export default function CaseStudy({ study }: CaseStudyProps) {
  return (
    <>
      <PageHero eyebrow={study.client} heading={study.title} size="md">
        <Button href="/work" variant="ghost" arrow="none">
          All work
        </Button>
      </PageHero>

      <section className={`pad ${styles.section}`}>
        <div className="wide">
          <Reveal>
            <ul className={styles.tags} aria-label="Project tags">
              {study.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1} className={styles.cover} aria-hidden="true">
            <span className={styles.coverMark}>{study.client}</span>
          </Reveal>

          <Reveal as="p" delay={2} className={styles.note}>
            Full case study content coming soon.
          </Reveal>
        </div>
      </section>
    </>
  );
}
