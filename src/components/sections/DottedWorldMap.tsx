"use client";

import { useEffect, useRef } from "react";
import { cx } from "@/lib/cx";
import { COLS, MARKERS, ROWS, decodeDots } from "@/lib/worldDots";
import { prefersReducedMotion } from "@/motion/useReducedMotion";
import styles from "./DottedWorldMap.module.css";

/* ── Tuning ───────────────────────────────────────── */
/* Distances are in lattice cells unless the name says px. One cell is one
   `scale` on screen, and the same scale applies to both axes, so cell
   distance and screen distance differ only by that factor. */

/** Dot radius as a fraction of the cell spacing, and its growth at full energy. */
const DOT_RADIUS = 0.2;
const DOT_GROWTH = 0.8;
/** Opacity of a resting dot, and of one at the crest of a wave. */
const ALPHA_REST = 0.26;
const ALPHA_PEAK = 0.72;
/** Dots are drawn in energy bands so each band is a single batched fill. */
const BANDS = 12;

/** Resting energy, plus a per-dot jitter so the field never looks stamped. */
const BASE_ENERGY = 0.05;
const BASE_JITTER = 0.06;

/* Standing ripple: every marker emits a front that expands and fades out. */
const WAVE_PERIOD = 7.4;
const WAVE_REACH = 126;
const WAVE_WIDTH = 4.6;
const WAVE_GAIN = 0.75;

/* Tap ripple: the same shape, shorter and sharper, from wherever it fired. */
const TAP_PERIOD = 1.9;
const TAP_REACH = 52;
const TAP_WIDTH = 3.4;
const TAP_GAIN = 1.15;
const TAP_LIMIT = 3;

/* Pointer halo. It breathes rather than sitting flat, so the field still
   reads as alive when the cursor is holding still. */
const HOVER_RADIUS = 140; // px
const HOVER_GAIN = 0.6;
const HOVER_BREATH = 3.1; // rad/s
const HOVER_FADE = 3.4; // strength per second

/** Expanding rings on the markers themselves. */
const RING_PERIOD = 3.8;

/* The lattice fills the width of its box, but is never allowed below this
   share of the height: past that the sides crop instead of the whole map
   thinning to a band across the middle of a tall hero. A consumer can raise
   it with `--map-fill`, read on every layout so a media query can change it. */
const MIN_FILL = 0.72;

const TAU = Math.PI * 2;

type Rgb = [number, number, number];

/** Reads a colour token off the element. Handles `#abc`, `#aabbcc` and `rgb()`. */
function readToken(style: CSSStyleDeclaration, name: string, fallback: Rgb): Rgb {
  const raw = style.getPropertyValue(name).trim();
  if (raw.startsWith("#")) {
    const hex = raw.slice(1);
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16),
      ];
    }
    if (hex.length >= 6) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    }
  }
  const parts = raw.match(/[\d.]+/g);
  if (parts && parts.length >= 3) return [+parts[0], +parts[1], +parts[2]];
  return fallback;
}

const mix = (a: Rgb, b: Rgb, t: number): Rgb => [
  Math.round(a[0] + (b[0] - a[0]) * t),
  Math.round(a[1] + (b[1] - a[1]) * t),
  Math.round(a[2] + (b[2] - a[2]) * t),
];

const rgba = (c: Rgb, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;

/* The packed lattice only needs unpacking once per page, not once per mount. */
let cellCache: number[] | null = null;
function landCells(): number[] {
  if (!cellCache) cellCache = decodeDots();
  return cellCache;
}

interface DottedWorldMapProps {
  className?: string;
}

/**
 * The land grid of a world map drawn as dots on a canvas, with ripples
 * expanding from each marker city and a halo that follows the pointer.
 *
 * Purely decorative: it carries nothing the page needs, so it is hidden from
 * assistive tech and simply renders nothing without JS.
 *
 * Canvas rather than 2,400 SVG circles — every dot changes colour and radius
 * on every frame, which no amount of CSS would keep cheap.
 */
export default function DottedWorldMap({ className }: DottedWorldMapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animated = !prefersReducedMotion();

    /* ── Lattice (independent of pixel size) ───────── */
    const cells = landCells();
    const n = cells.length;
    const col = new Float32Array(n);
    const row = new Float32Array(n);
    const base = new Float32Array(n);

    for (let i = 0; i < n; i++) {
      const c = cells[i] % COLS;
      const r = (cells[i] - c) / COLS;
      col[i] = c;
      row[i] = r;
      /* Deterministic per-cell hash, so the resting field is uneven in the
         same way at every size and after every resize. */
      const h = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
      base[i] = BASE_ENERGY + (h - Math.floor(h)) * BASE_JITTER;
    }

    /* Each marker emits its own front, offset around the cycle so they never
       all fire together. The hub leads; the rest stay quieter. */
    const sources = MARKERS.map((m, i) => ({
      col: m.col,
      row: m.row,
      hub: m.hub,
      offset: (i * 0.41) % 1,
      gain: (m.hub ? 1 : 0.5) * WAVE_GAIN,
    }));

    /* Cell distance from every dot to every source never changes, so it is
       paid once here instead of 14,000 square roots per frame. */
    const waveDist = new Float32Array(sources.length * n);
    sources.forEach((s, si) => {
      const off = si * n;
      for (let i = 0; i < n; i++) {
        const dc = col[i] - s.col;
        const dr = row[i] - s.row;
        waveDist[off + i] = Math.sqrt(dc * dc + dr * dr);
      }
    });

    /* ── Palette ───────────────────────────────────── */
    const cs = getComputedStyle(wrap);
    const ink = readToken(cs, "--color-text", [10, 10, 10]);
    const accent = readToken(cs, "--color-accent", [214, 59, 49]);
    const accentSoft = readToken(cs, "--color-accent-light", [232, 117, 97]);

    /* One fill per energy band: dots warm towards the accent as they light up. */
    const bandEnergy = new Float32Array(BANDS);
    const bandStyle: string[] = [];
    for (let b = 0; b < BANDS; b++) {
      const mid = (b + 0.5) / BANDS;
      bandEnergy[b] = mid;
      bandStyle.push(
        rgba(
          mix(ink, accent, Math.min(1, mid * 1.05)),
          ALPHA_REST + (ALPHA_PEAK - ALPHA_REST) * mid,
        ),
      );
    }

    const bandX: Float32Array[] = [];
    const bandY: Float32Array[] = [];
    const bandCount = new Int32Array(BANDS);
    for (let b = 0; b < BANDS; b++) {
      bandX.push(new Float32Array(n));
      bandY.push(new Float32Array(n));
    }

    /* ── Geometry ──────────────────────────────────── */
    let width = 0;
    let height = 0;
    let scale = 1;
    let dotR = 1;
    let originX = 0;
    let originY = 0;
    const px = new Float32Array(n);
    const py = new Float32Array(n);
    const bandRadius = new Float32Array(BANDS);

    const layout = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      /* Everything below works in CSS pixels; the transform handles density. */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const contain = Math.min(width / (COLS - 1), height / (ROWS - 1));
      const fill = parseFloat(cs.getPropertyValue("--map-fill")) || MIN_FILL;
      scale = Math.max(contain, (height * fill) / (ROWS - 1));
      originX = (width - (COLS - 1) * scale) / 2;
      originY = (height - (ROWS - 1) * scale) / 2;
      dotR = Math.max(1, scale * DOT_RADIUS);

      for (let i = 0; i < n; i++) {
        px[i] = originX + col[i] * scale;
        py[i] = originY + row[i] * scale;
      }
      for (let b = 0; b < BANDS; b++) {
        bandRadius[b] = dotR * (1 + bandEnergy[b] * DOT_GROWTH);
      }
      syncBox();
    };

    /* ── Pointer and taps ──────────────────────────── */
    let clock = 0;
    /* Where the canvas sits in the viewport. Cached so neither a pointer move
       nor a frame has to force a layout read to place the halo. */
    let boxLeft = 0;
    let boxTop = 0;
    /* `seen` guards the default 0,0 position: without a real pointer event it
       would sit in the top-left corner and light a halo there. */
    const pointer = { clientX: 0, clientY: 0, x: 0, y: 0, seen: false, inside: false, strength: 0 };
    const taps: { col: number; row: number; born: number }[] = [];

    const place = () => {
      pointer.x = pointer.clientX - boxLeft;
      pointer.y = pointer.clientY - boxTop;
      pointer.inside =
        pointer.seen &&
        pointer.x >= 0 &&
        pointer.y >= 0 &&
        pointer.x <= width &&
        pointer.y <= height;
    };

    const syncBox = () => {
      const box = canvas.getBoundingClientRect();
      boxLeft = box.left;
      boxTop = box.top;
      place();
    };

    /* Tracked on the window rather than the canvas: the headline sits on top
       of the map, so a listener on the canvas would go dead behind it.
       A dragged finger is ignored — it would leave a halo stuck wherever it
       lifted. Touch gets the tap ripple instead. */
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pointer.clientX = e.clientX;
      pointer.clientY = e.clientY;
      pointer.seen = true;
      place();
    };

    /* A null relatedTarget means the pointer left the document rather than
       crossing into another element. */
    const onPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) pointer.inside = false;
    };

    /* The hero slides under a cursor that never moved, so the halo has to be
       replaced against the new box position. */
    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        syncBox();
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      const x = e.clientX - boxLeft;
      const y = e.clientY - boxTop;
      if (x < 0 || y < 0 || x > width || y > height) return;
      if (taps.length >= TAP_LIMIT) taps.shift();
      taps.push({
        col: (x - originX) / scale,
        row: (y - originY) / scale,
        born: clock,
      });
    };

    /* ── Frame ─────────────────────────────────────── */
    let raf = 0;
    let last = 0;
    const fronts = new Float64Array(sources.length * 2);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      bandCount.fill(0);

      const hoverAmp = pointer.strength
        ? pointer.strength * HOVER_GAIN * (0.78 + 0.22 * Math.sin(clock * HOVER_BREATH))
        : 0;
      const invHover = 1 / (HOVER_RADIUS * HOVER_RADIUS);
      const invWave = 1 / WAVE_WIDTH;
      const invTap = 1 / TAP_WIDTH;

      /* Front position and decay are shared by every dot of a source. */
      if (animated) {
        for (let s = 0; s < sources.length; s++) {
          const phase = (clock / WAVE_PERIOD + sources[s].offset) % 1;
          fronts[s * 2] = phase * WAVE_REACH;
          fronts[s * 2 + 1] = (1 - phase) * sources[s].gain;
        }
        while (taps.length && clock - taps[0].born > TAP_PERIOD) taps.shift();
      }

      for (let i = 0; i < n; i++) {
        let e = base[i];

        if (animated) {
          for (let s = 0; s < sources.length; s++) {
            const a = 1 - Math.abs(waveDist[s * n + i] - fronts[s * 2]) * invWave;
            if (a > 0) e += a * a * fronts[s * 2 + 1];
          }

          for (let t = 0; t < taps.length; t++) {
            const tap = taps[t];
            const phase = (clock - tap.born) / TAP_PERIOD;
            const dc = col[i] - tap.col;
            const dr = row[i] - tap.row;
            const d = Math.sqrt(dc * dc + dr * dr);
            const a = 1 - Math.abs(d - phase * TAP_REACH) * invTap;
            if (a > 0) e += a * a * (1 - phase) * TAP_GAIN;
          }

          if (hoverAmp > 0) {
            const dx = px[i] - pointer.x;
            const dy = py[i] - pointer.y;
            const a = 1 - (dx * dx + dy * dy) * invHover;
            if (a > 0) e += a * a * hoverAmp;
          }
        }

        const b = e <= 0 ? 0 : e >= 1 ? BANDS - 1 : (e * BANDS) | 0;
        const k = bandCount[b]++;
        bandX[b][k] = px[i];
        bandY[b][k] = py[i];
      }

      for (let b = 0; b < BANDS; b++) {
        const count = bandCount[b];
        if (!count) continue;
        const r = bandRadius[b];
        const xs = bandX[b];
        const ys = bandY[b];
        ctx.beginPath();
        for (let k = 0; k < count; k++) {
          ctx.moveTo(xs[k] + r, ys[k]);
          ctx.arc(xs[k], ys[k], r, 0, TAU);
        }
        ctx.fillStyle = bandStyle[b];
        ctx.fill();
      }

      /* Markers last, so their rings sit over the field. */
      for (let s = 0; s < sources.length; s++) {
        const src = sources[s];
        const x = originX + src.col * scale;
        const y = originY + src.row * scale;
        const core = dotR * (src.hub ? 2.4 : 1.8);

        if (animated) {
          for (let ring = 0; ring < 2; ring++) {
            const phase = (clock / RING_PERIOD + src.offset + ring * 0.5) % 1;
            ctx.beginPath();
            ctx.arc(x, y, core * (1 + phase * 4.5), 0, TAU);
            ctx.strokeStyle = rgba(accent, (1 - phase) * (src.hub ? 0.38 : 0.22));
            ctx.lineWidth = Math.max(1, dotR * 0.5);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, core, 0, TAU);
        ctx.fillStyle = rgba(src.hub ? accent : accentSoft, src.hub ? 0.95 : 0.8);
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      clock += dt;

      /* Ease the halo in and out so it never snaps on at the hero's edge. */
      const target = pointer.inside ? 1 : 0;
      const delta = target - pointer.strength;
      pointer.strength += Math.sign(delta) * Math.min(HOVER_FADE * dt, Math.abs(delta));

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    layout();
    draw();

    const ro = new ResizeObserver(() => {
      layout();
      if (!raf) draw();
    });
    ro.observe(wrap);

    if (!animated) return () => ro.disconnect();

    /* Nothing runs while the map is off screen or the tab is in the background. */
    let onScreen = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !document.hidden) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    const onVisibility = () => {
      if (document.hidden || !onScreen) stop();
      else start();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      cancelAnimationFrame(scrollRaf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={wrapRef} className={cx(styles.wrap, className)} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
