"use client";

import { createElement, useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { prefersReducedMotion } from "./useReducedMotion";

type Tag =
  | "div"
  | "section"
  | "article"
  | "p"
  | "li"
  | "ul"
  | "span"
  | "header"
  | "figure"
  | "blockquote"
  | "h2"
  | "h3"
  | "nav"
  | "form"
  | "footer";

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. */
  as?: Tag;
  /** Stagger step (0.1s each). */
  delay?: 0 | 1 | 2 | 3 | 4;
  children?: ReactNode;
}

/* One shared observer for every revealed element on the page. */
let shared: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function observer(): IntersectionObserver {
  if (shared) return shared;
  shared = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        shared?.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  return shared;
}

/**
 * Scroll reveal: renders with the global `.reveal` class (opacity 0,
 * translateY) and adds `.in` once the element enters the viewport.
 */
export default function Reveal({ as = "div", delay = 0, className, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = observer();
    callbacks.set(el, () => setShown(true));
    io.observe(el);
    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cx("reveal", shown && "in", className),
      "data-delay": delay || undefined,
      ...rest,
    },
    children,
  );
}
