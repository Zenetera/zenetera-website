import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

export type CardTone = "accent" | "neutral" | "surface" | "dark" | "glass";

interface CardProps extends HTMLAttributes<HTMLElement> {
  tone?: CardTone;
  /** Draw the soft circle in the bottom-right corner. */
  shape?: boolean;
  /** Tighter padding. */
  compact?: boolean;
  as?: "div" | "article" | "li" | "section";
  children: ReactNode;
}

/**
 * Rounded card with a tinted fill. `dark` flips the contextual text and
 * hairline tokens; `glass` adapts to whichever zone it sits in.
 */
export default function Card({
  tone = "surface",
  shape = false,
  compact = false,
  as: Tag = "div",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cx(
        styles.card,
        styles[tone],
        tone === "dark" && "tone-dark",
        shape && styles.shape,
        compact && styles.compact,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
