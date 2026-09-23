"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { prefersReducedMotion } from "./useReducedMotion";
import styles from "./StickyStack.module.css";

interface StickyStackProps {
  children: ReactNode;
  /** Sticky offset of the first card (px). */
  baseTop?: number;
  /** Extra offset per card (px). */
  step?: number;
  className?: string;
}

/**
 * Cards stick under one another as you scroll; each card scales down
 * slightly while the next one covers it (transform only, rAF-throttled).
 */
export default function StickyStack({ children, baseTop = 96, step = 20, className }: StickyStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap || prefersReducedMotion()) return;
    const cards = Array.from(wrap.children) as HTMLElement[];
    if (cards.length < 2) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rects = cards.map((c) => c.getBoundingClientRect());
      for (let i = 0; i < cards.length - 1; i++) {
        const t = Math.min(Math.max((rects[i].bottom - rects[i + 1].top) / rects[i].height, 0), 1);
        cards[i].style.transform = t > 0 ? `scale(${(1 - t * 0.05).toFixed(4)})` : "";
      }
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={cx(styles.stack, className)}>
      {Children.toArray(children).map((child, i) => (
        <div key={i} className={styles.item} style={{ top: `${baseTop + i * step}px` }}>
          {child}
        </div>
      ))}
    </div>
  );
}
