"use client";

import { useEffect, useState } from "react";

const REDUCE = "(prefers-reduced-motion: reduce)";
const FINE = "(pointer: fine)";

/** Synchronous check for use inside effects (never true during SSR). */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCE).matches;
}

/** True on devices with a precise pointer (mouse / trackpad). */
export function isFinePointer(): boolean {
  return typeof window !== "undefined" && window.matchMedia(FINE).matches;
}

/** Reactive reduced-motion flag. Starts false so server and client markup match. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(REDUCE);
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
