"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { isFinePointer, prefersReducedMotion } from "./useReducedMotion";
import styles from "./Magnetic.module.css";

interface MagneticProps {
  children: ReactNode;
  /** Fraction of the cursor offset applied to the element. */
  pull?: number;
  /** Activation distance (px) measured from the element's edge. */
  range?: number;
  /** Cap on the travel in either axis (px). */
  max?: number;
  className?: string;
}

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value));

/** Pulls its child towards a nearby cursor (mouse only, transform only). */
export default function Magnetic({ children, pull = 0.16, range = 56, max = 10, className }: MagneticProps) {
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
      /* Distance to the nearest point on the element's box, so the activation
         ring hugs the button's edge instead of widening with the button. */
      const edgeX = Math.max(r.left - lastX, 0, lastX - r.right);
      const edgeY = Math.max(r.top - lastY, 0, lastY - r.bottom);
      const near = Math.hypot(edgeX, edgeY) < range;
      if (near) {
        active = true;
        el.classList.add(styles.active);
        const dx = clamp((lastX - (r.left + r.width / 2)) * pull, max);
        const dy = clamp((lastY - (r.top + r.height / 2)) * pull, max);
        el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
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
  }, [pull, range, max]);

  return (
    <span ref={ref} className={cx(styles.magnet, className)}>
      {children}
    </span>
  );
}
