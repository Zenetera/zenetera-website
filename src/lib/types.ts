export interface Service {
  title: string;
  description: string;
  icon: string;
}

/* ── Work / case studies ─────────────────────────────── */

/** One image in a case study: a screenshot, photo or brand board. */
export interface WorkImage {
  /** Path under /public, e.g. "/images/work/acme/cover.jpg". */
  src: string;
  alt: string;
  /** CSS aspect ratio the box is drawn at, e.g. "16 / 10" or "4 / 3". Defaults per slot. */
  aspect?: string;
}

/** One titled block of the story: "Overview", "The challenge", "What we did", "The result". */
export interface WorkSection {
  heading: string;
  /** One-sentence takeaway shown large under the heading. */
  lede?: string;
  /** Short paragraphs, one string each. */
  body: string[];
  /** Hairline list under the copy: deliverables, features, outcomes. */
  bullets?: string[];
  /** Images shown below the copy. One is full width; two sit side by side; more wrap in pairs. */
  media?: WorkImage[];
}

export interface WorkStat {
  /** Display value such as "3×", "68%", "1.2s" or "Top 3"; the number counts up on scroll. */
  value: string;
  label: string;
}

export interface WorkQuote {
  text: string;
  name: string;
  /** Job title and company, e.g. "Owner, Brighton Plumbing Co." */
  role: string;
}

export interface CaseStudy {
  /** URL segment: /work/<slug>. */
  slug: string;
  client: string;
  /** Outcome-led headline, e.g. "Turning emergency searches into booked jobs". */
  title: string;
  /** One or two sentences: shown under the headline, on cards and as the page description. */
  summary: string;
  sector: string;
  location?: string;
  /** Shown as pills on cards and in the details row. */
  services: string[];
  year: string;
  /** Adds a "Visit site" button. */
  liveUrl?: string;
  /** Leads the /work page and the home-page strip. Only one should be set. */
  featured?: boolean;
  /** Main image; falls back to a tinted panel with the client name when absent. */
  cover?: WorkImage;
  sections: WorkSection[];
  /** Up to four; drawn as a counting stat grid. */
  stats?: WorkStat[];
  testimonial?: WorkQuote;
}
