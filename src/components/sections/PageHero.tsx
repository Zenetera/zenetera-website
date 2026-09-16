import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import WordRise from "@/components/ui/WordRise";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  /** Small label above the headline (rendered with a pulsing dot). */
  eyebrow?: string;
  heading: string;
  /** Phrase in `heading` to render as accent flair. */
  flair?: string;
  sub?: string;
  /** "From …" price line (niche pages). */
  price?: string;
  /** Dark zone variant. */
  dark?: boolean;
  /** Narrower headline for long-form pages. */
  size?: "lg" | "md";
  /** CTAs, rendered in the row beside the sub-line. */
  children?: ReactNode;
  className?: string;
}

/** Shared hero for inner pages: kicker, word-rise headline, sub-line and CTAs. */
export default function PageHero({
  eyebrow,
  heading,
  flair,
  sub,
  price,
  dark = false,
  size = "lg",
  children,
  className,
}: PageHeroProps) {
  const hasRow = Boolean(sub || price || children);

  return (
    <section className={cx(styles.hero, dark && styles.dark, className)} data-theme={dark ? "dark" : undefined}>
      <div className="pad wide">
        {eyebrow && (
          <p className={styles.kicker}>
            <i className="pulse" aria-hidden="true" />
            {eyebrow}
          </p>
        )}

        <WordRise as="h1" className={cx(styles.heading, size === "md" && styles.headingMd)} text={heading} flair={flair} />

        {hasRow && (
          <div className={styles.row}>
            {(sub || price) && (
              <div className={styles.copy}>
                {sub && <p className={styles.sub}>{sub}</p>}
                {price && <p className={styles.price}>From {price}</p>}
              </div>
            )}
            {children && <div className={styles.ctas}>{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
