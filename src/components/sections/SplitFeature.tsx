import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import FeatureList from "@/components/ui/FeatureList";
import Reveal from "@/motion/Reveal";
import styles from "./SplitFeature.module.css";

export type SplitTone = "light" | "alt" | "dark";

interface SplitFeatureProps {
  /** Section index for the eyebrow pill, e.g. "01". */
  index: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  /** Illustration for the media side. Without one, the bullets move into a tinted card there instead. */
  illustration?: ReactNode;
  /** Put the media on the right. */
  reversed?: boolean;
  tone?: SplitTone;
  id?: string;
}

const cardTone: Record<SplitTone, CardTone> = { light: "accent", alt: "surface", dark: "glass" };

/**
 * Two-column feature section: eyebrow + uppercase title + body on one side,
 * an illustration (or the bullet card) on the other. Alternates per section.
 */
export default function SplitFeature({
  index,
  label,
  title,
  body,
  bullets,
  illustration,
  reversed = false,
  tone = "light",
  id,
}: SplitFeatureProps) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={cx("pad", styles.section, styles[tone], dark && "zone-top", !illustration && styles.noIllustration)}
      data-theme={dark ? "dark" : undefined}
    >
      <div className={cx("wide", styles.grid, reversed && styles.reversed)}>
        <Reveal className={styles.media}>
          {illustration ? (
            <div className={styles.frame}>{illustration}</div>
          ) : (
            <Card tone={cardTone[tone]} shape className={styles.bulletCard}>
              <span className={styles.bigIndex} aria-hidden="true">
                {index}
              </span>
              <FeatureList items={bullets} />
            </Card>
          )}
        </Reveal>

        <div className={styles.content}>
          <Reveal>
            <Eyebrow index={index}>{label}</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={1} className={styles.title}>
            {title}
          </Reveal>
          <Reveal as="p" delay={2} className={styles.body}>
            {body}
          </Reveal>
          {illustration && (
            <Reveal delay={3} className={styles.list}>
              <FeatureList items={bullets} />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
