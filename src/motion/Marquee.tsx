import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  direction?: "left" | "right";
  /** Space between the two duplicated sets (any CSS length). */
  gap?: string;
  pauseOnHover?: boolean;
  /** Hide from assistive tech (use for purely decorative strips). */
  decorative?: boolean;
  className?: string;
  setClassName?: string;
}

/**
 * Infinite horizontal marquee. Children are rendered twice; the track
 * translates by exactly one set, so the loop is seamless. Static under
 * reduced motion.
 */
export default function Marquee({
  children,
  duration = 30,
  direction = "left",
  gap = "0px",
  pauseOnHover = true,
  decorative = false,
  className,
  setClassName,
}: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": gap } as CSSProperties;

  return (
    <div
      className={cx(styles.marquee, pauseOnHover && styles.pausable, className)}
      aria-hidden={decorative || undefined}
    >
      <div className={cx(styles.track, direction === "right" && styles.reverse)} style={style}>
        <div className={cx(styles.set, setClassName)}>{children}</div>
        <div className={cx(styles.set, setClassName)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
