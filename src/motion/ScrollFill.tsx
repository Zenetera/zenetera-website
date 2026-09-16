"use client";

import { createElement, useEffect, useRef } from "react";
import { cx } from "@/lib/cx";
import { prefersReducedMotion } from "./useReducedMotion";
import styles from "./ScrollFill.module.css";

interface ScrollFillProps {
  text: string;
  /** Phrase inside `text` to colour with the accent once revealed. */
  highlight?: string;
  as?: "p" | "h2" | "h3" | "blockquote";
  className?: string;
  id?: string;
}

/**
 * Big statement text whose words fade from 22% to full opacity as the
 * reader scrolls past them (one passive, rAF-throttled listener).
 */
export default function ScrollFill({ text, highlight, as = "p", className, id }: ScrollFillProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(/\s+/).filter(Boolean);
  const hl = highlight ? highlight.split(/\s+/).filter(Boolean) : [];
  const norm = (w: string) => w.replace(/[^\w’']/g, "").toLowerCase();

  let start = -1;
  if (hl.length) {
    for (let i = 0; i <= words.length - hl.length; i++) {
      if (hl.every((w, j) => norm(words[i + j]) === norm(w))) {
        start = i;
        break;
      }
    }
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    if (prefersReducedMotion()) {
      spans.forEach((s) => s.classList.add(styles.on));
      return;
    }

    let raf = 0;
    let last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0), 1);
      const active = Math.round(p * spans.length);
      if (active === last) return;
      last = active;
      spans.forEach((s, i) => s.classList.toggle(styles.on, i < active));
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

  return createElement(
    as,
    { ref, id, className: cx(styles.text, className) },
    words.map((w, i) => (
      <span
        key={i}
        data-word=""
        className={cx(styles.word, start >= 0 && i >= start && i < start + hl.length && styles.accent)}
      >
        {w}
        {i < words.length - 1 ? " " : ""}
      </span>
    )),
  );
}
