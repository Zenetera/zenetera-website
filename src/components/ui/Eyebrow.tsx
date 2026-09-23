import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
  /** Section index shown in a pill, e.g. "01". */
  index?: string;
  /** Drop the trailing rule and bottom margin (for use inside cards). */
  compact?: boolean;
  as?: "p" | "span" | "div";
  className?: string;
}

/** Section label: optional index pill, uppercase text, hairline rule. */
export default function Eyebrow({ children, index, compact = false, as: Tag = "p", className }: EyebrowProps) {
  return (
    <Tag className={cx(styles.eyebrow, compact && styles.compact, className)}>
      {index && <span className={styles.idx}>{index}</span>}
      <span className={styles.text}>{children}</span>
    </Tag>
  );
}
