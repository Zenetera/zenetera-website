import { caseStudies } from "@/content/work";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import { cx } from "@/lib/cx";
import WorkCard from "./WorkCard";
import styles from "./SelectedWork.module.css";

const COUNT = 3;

/** Home-page strip: the featured project first, then the next two, linking to /work. */
export default function SelectedWork() {
  const featured = caseStudies.filter((study) => study.featured);
  const others = caseStudies.filter((study) => !study.featured);
  const picks = [...featured, ...others].slice(0, COUNT);

  if (picks.length === 0) return null;

  return (
    <section className={`pad ${styles.section}`} id="work">
      <div className="wide">
        <Reveal>
          <Eyebrow index="03">Selected work</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <div>
            <Reveal as="h2" className={styles.heading}>
              Recent projects
            </Reveal>
            <Reveal as="p" delay={1} className={styles.sub}>
              Websites, automation and brand work for owner-run businesses, and the thinking behind
              each one.
            </Reveal>
          </div>
          <Reveal delay={1} className={styles.cta}>
            <Button href="/work" variant="ghost">
              All work
            </Button>
          </Reveal>
        </div>

        {/* One project gets the wide lead card; two or three share a row. */}
        {picks.length === 1 ? (
          <Reveal>
            <WorkCard study={picks[0]} variant="lead" />
          </Reveal>
        ) : (
          <div className={cx(styles.grid, picks.length === 2 && styles.gridTwo)}>
            {picks.map((study, i) => (
              <Reveal key={study.slug} delay={i as 0 | 1 | 2} className={styles.cell}>
                <WorkCard study={study} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
