"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { prefersReducedMotion } from "@/motion/useReducedMotion";
import styles from "./Hero.module.css";

interface HeroMediaProps {
  children: ReactNode;
  className?: string;
}

/**
 * Rounded media panel: a curtain slides away on load, then the inner layer
 * drifts vertically with scroll (transform only, rAF-throttled).
 */
export default function HeroMedia({ children, className }: HeroMediaProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const panel = inner?.parentElement;
    if (!inner || !panel || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = panel.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
      inner.style.transform = `translateY(${((p - 0.5) * 60).toFixed(1)}px)`;
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
    <figure className={cx(styles.media, className)}>
      <div ref={innerRef} className={styles.mediaInner}>
        {children}
      </div>
      <span className={styles.curtain} aria-hidden="true" />
    </figure>
  );
}
