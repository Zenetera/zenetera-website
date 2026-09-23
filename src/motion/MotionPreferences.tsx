"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { prefersReducedMotion } from "./useReducedMotion";

/**
 * Mounted once in the root layout. Pauses SMIL animations inside inline SVGs
 * (which CSS media queries cannot reach) when the visitor prefers reduced motion.
 */
export default function MotionPreferences() {
  const pathname = usePathname();

  useEffect(() => {
    if (!prefersReducedMotion()) return;
    document.querySelectorAll<SVGSVGElement>("svg").forEach((svg) => {
      try {
        svg.pauseAnimations();
      } catch {
        /* not an animated SVG */
      }
    });
  }, [pathname]);

  return null;
}
