import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import Arrow from "@/components/ui/Arrow";
import { cx } from "@/lib/cx";
import WorkMedia, { WorkArt } from "./WorkMedia";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  study: CaseStudy;
  /** "lead" puts the cover beside the copy instead of above it. */
  variant?: "grid" | "lead";
  /** Heading level for the project title, to fit the page outline. */
  headingLevel?: "h2" | "h3";
  /** Preload the cover (above the fold). */
  priority?: boolean;
}

/** Cover-image card linking to a case study. Shared by the home strip and the /work grid. */
export default function WorkCard({
  study,
  variant = "grid",
  headingLevel: Heading = "h3",
  priority = false,
}: WorkCardProps) {
  const lead = variant === "lead";
  /* Grid covers match the 16:10 screenshots, so they fill the card by width
     instead of being cropped and zoomed. `sizes` tracks the real column
     widths so the browser fetches a file at least as wide as it draws. */
  const aspect = lead ? "16 / 11" : "16 / 10";
  const sizes = lead
    ? "(max-width: 900px) 100vw, 55vw"
    : "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 34vw";

  return (
    <Link href={`/work/${study.slug}`} className={cx(styles.card, lead && styles.lead)}>
      <span className={styles.media}>
        {study.cover ? (
          <WorkMedia image={study.cover} aspect={aspect} sizes={sizes} priority={priority} flat />
        ) : (
          <WorkArt client={study.client} aspect={aspect} flat />
        )}
      </span>

      <span className={styles.body}>
        <span className={styles.meta}>
          <span className={styles.client}>{study.client}</span>
          <span className={styles.dot} aria-hidden="true" />
          <span>{study.year}</span>
        </span>
        <Heading className={styles.title}>{study.title}</Heading>
        {lead && <span className={styles.summary}>{study.summary}</span>}
        <span className={styles.tags} aria-label="Services">
          {study.services.map((service) => (
            <span key={service} className={styles.tag}>
              {service}
            </span>
          ))}
        </span>
        <span className={styles.more}>
          View case study
          <Arrow size={14} className={styles.moreArrow} />
        </span>
      </span>
    </Link>
  );
}
