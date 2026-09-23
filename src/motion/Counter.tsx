"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

interface CounterProps {
  /** Display value such as "50+", "96%", "2×" or "< 1 day". */
  value: string;
  className?: string;
  /** Class for the text either side of the number, such as the "+" of "50+". */
  affixClassName?: string;
  duration?: number;
  /**
   * For a counter inside something that fades in on page load: when that
   * fade begins, in ms after navigation start. The counter then counts even
   * though it is on screen at mount, because the reset to zero happens while
   * it is still hidden. If hydration arrives later than this, it keeps the
   * final value instead.
   */
  revealAt?: number;
}

const NUMBER = /^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/;

/**
 * Renders the final value in the HTML and, once 60% visible, counts the
 * numeric part up from one — never zero, which next to its units reads as a
 * claim ("< 0 day"). Skipped under reduced motion or when the element is
 * already on screen at mount (no jump from final back to the start), unless
 * `revealAt` says it is still hidden.
 */
export default function Counter({
  value,
  className,
  affixClassName,
  duration = 1500,
  revealAt,
}: CounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const match = NUMBER.exec(value);

  useEffect(() => {
    const el = numRef.current;
    const m = NUMBER.exec(value);
    if (!el || !m) return;
    const raw = m[2].replace(",", ".");
    const target = parseFloat(raw);
    const decimals = (raw.split(".")[1] ?? "").length;
    if (prefersReducedMotion() || target === 0 || typeof IntersectionObserver === "undefined")
      return;
    if (revealAt === undefined) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    } else if (performance.now() >= revealAt) {
      return;
    }

    const from = Math.min(1, target);
    el.textContent = from.toFixed(decimals);
    let raf = 0;
    let timer = 0;
    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        /* The first frame's timestamp can fall just before t0. */
        const p = Math.min(Math.max((now - t0) / duration, 0), 1);
        el.textContent = (from + (target - from) * (1 - Math.pow(1 - p, 3))).toFixed(decimals);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        timer = window.setTimeout(run, Math.max(0, (revealAt ?? 0) - performance.now()));
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [value, duration, revealAt]);

  if (!match) return <span className={className}>{value}</span>;

  const affix = (text: string) =>
    text && affixClassName ? <span className={affixClassName}>{text}</span> : text;

  return (
    <span className={className}>
      {affix(match[1])}
      <span ref={numRef}>{match[2]}</span>
      {affix(match[3])}
    </span>
  );
}
