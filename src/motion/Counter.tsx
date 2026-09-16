"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

interface CounterProps {
  /** Display value such as "50+", "96%", "2×" or "< 1 day". */
  value: string;
  className?: string;
  duration?: number;
}

const NUMBER = /^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/;

/**
 * Renders the final value in the HTML and, once 60% visible, counts the
 * numeric part up from zero. Skipped under reduced motion or when the
 * element is already on screen at mount (no jump from final to zero).
 */
export default function Counter({ value, className, duration = 1500 }: CounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const match = NUMBER.exec(value);

  useEffect(() => {
    const el = numRef.current;
    const m = NUMBER.exec(value);
    if (!el || !m) return;
    const raw = m[2].replace(",", ".");
    const target = parseFloat(raw);
    const decimals = (raw.split(".")[1] ?? "").length;
    if (prefersReducedMotion() || target === 0 || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.textContent = (0).toFixed(decimals);
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(decimals);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span className={className}>
      {match[1]}
      <span ref={numRef}>{match[2]}</span>
      {match[3]}
    </span>
  );
}
