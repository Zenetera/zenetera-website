"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { isFinePointer, prefersReducedMotion } from "./useReducedMotion";
import styles from "./Magnetic.module.css";

interface MagneticProps {
  children: ReactNode;
  /** Fraction of the cursor offset applied to the element. */
  pull?: number;
  /** Activation radius (px) beyond the element's own half size. */
  range?: number;
  className?: string;
}

/** Pulls its child towards a nearby cursor (mouse only, transform only). */
export default function Magnetic({ children, pull = 0.3, range = 120, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !isFinePointer()) return;

    let raf = 0;
    let active = false;
    let lastX = 0;
    let lastY = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const dx = lastX - (r.left + r.width / 2);
      const dy = lastY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < range + Math.max(r.width, r.height) / 2;
      if (near) {
        active = true;
        el.classList.add(styles.active);
        el.style.transform = `translate(${(dx * pull).toFixed(1)}px, ${(dy * pull).toFixed(1)}px)`;
      } else if (active) {
        active = false;
        el.classList.remove(styles.active);
        el.style.transform = "";
      }
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [pull, range]);

  return (
    <span ref={ref} className={cx(styles.magnet, className)}>
      {children}
    </span>
  );
}
