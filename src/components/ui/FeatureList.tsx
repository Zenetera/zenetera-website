import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./FeatureList.module.css";

interface FeatureListProps {
  items: ReactNode[];
  className?: string;
  /** Smaller text and tighter rows. */
  dense?: boolean;
}

/** Hairline "wire" rows with an accent dot; adapts to light and dark zones. */
export default function FeatureList({ items, className, dense = false }: FeatureListProps) {
  return (
    <ul className={cx(styles.list, dense && styles.dense, className)}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <i className={styles.dot} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
