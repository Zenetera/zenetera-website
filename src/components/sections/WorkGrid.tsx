import type { CaseStudy } from "@/lib/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import WorkCard from "./WorkCard";
import styles from "./WorkGrid.module.css";

interface WorkGridProps {
  studies: CaseStudy[];
}

/** The /work index: the featured project as a wide lead card, then the rest three-up. */
export default function WorkGrid({ studies }: WorkGridProps) {
  const lead = studies.find((study) => study.featured) ?? studies[0];
  const rest = studies.filter((study) => study !== lead);

  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="01">Selected work</Eyebrow>
        </Reveal>

        {!lead && (
          <Reveal as="p" className={styles.empty}>
            Case studies are on their way.
          </Reveal>
        )}

        {lead && (
          <Reveal className={styles.leadWrap}>
            <WorkCard study={lead} variant="lead" headingLevel="h2" priority />
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) as 0 | 1 | 2} className={styles.cell}>
                <WorkCard study={study} headingLevel="h2" />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
