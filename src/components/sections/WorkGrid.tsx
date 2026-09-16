import Link from "next/link";
import { caseStudies } from "@/content/work";
import Arrow from "@/components/ui/Arrow";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import styles from "./WorkGrid.module.css";

const tones: CardTone[] = ["accent", "neutral", "dark"];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function WorkGrid() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="01">Selected Work</Eyebrow>
        </Reveal>

        <div className={styles.grid}>
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i as 0 | 1 | 2} className={styles.cell}>
              <Link href={`/work/${study.slug}`} className={styles.cardLink}>
                <Card as="article" tone={tones[i % tones.length]} shape className={styles.card}>
                  <span className={styles.mark} aria-hidden="true">
                    {initials(study.client)}
                  </span>
                  <span className={styles.client}>{study.client}</span>
                  <h2 className={styles.title}>{study.title}</h2>
                  <ul className={styles.tags}>
                    {study.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className={styles.more}>
                    View case study
                    <Arrow size={14} className={styles.moreArrow} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
