# Zenetera redesign — analysis, audit and plan

Reference: `gantry-v5.html` (design reference only; no copy, branding or imagery reused).
Target: this project (`new/`), a copy of `zenetera-website/` on branch `redesign/gantry-inspired`.

---

## 1. Reference breakdown (gantry-v5.html)

### Layout
- **No fixed container.** Every section is padded horizontally by one fluid token, `--pad: clamp(20px, 4.5vw, 64px)`, and content runs edge-to-edge. Text blocks are constrained by `max-width` in `ch` (13–52ch) rather than a page container.
- **Vertical rhythm** is viewport-relative: section padding `clamp(100px, 14vh, 170px)` (hero/CTA use up to 16–18vh), inner gaps `clamp(16px, 3vw, 48px)`.
- **Section signature:** an eyebrow row (`01` index pill + label + hairline rule that flexes to fill), then a very large heading, then content.
- **Grids:** hero-row (space-between flex), 4-column service rows (`84px 1.15fr 1fr 70px`), 2-column card (`minmax(130px,.55fr) 1.45fr`), 2-column estate grid, 4-up stat grid with hairline dividers. Everything collapses to 1–2 columns at 880px, with a second pass at 560px.
- **Zones:** light ivory page, a dark "zone" block with `border-radius: 40px 40px 0 0`, then a coloured CTA block with the same rounded top. The nav recolours itself over any `[data-theme="dark"]` zone.

### Type scale (all fluid clamps)
| Role | Size | Notes |
|---|---|---|
| Hero h1 | `clamp(44px, 8.4vw, 128px)` | lh .95, tracking −.035em, uppercase, weight ~760, wide |
| CTA h2 | `clamp(42px, 7.6vw, 116px)` | lh .94 |
| Section h2 | `clamp(34px, 5.6vw, 76px)` | lh .98, max 16ch |
| Manifesto | `clamp(27px, 4.5vw, 60px)` | lh 1.16, 22ch |
| Quote | `clamp(28px, 4.6vw, 62px)` | serif italic |
| Row h3 | `clamp(25px, 3.6vw, 48px)` | uppercase |
| Card h3 | `clamp(21px, 2.4vw, 31px)` | |
| Big number | `clamp(42px, 5.8vw, 82px)` | stat / time |
| Giant wordmark | `clamp(92px, 19.5vw, 330px)` | outline text, clipped |
| Sub / body | 15–19.5px | |
| Eyebrow / meta | `clamp(11px, 1.05vw, 13px)` | mono, uppercase, tracking .08–.12em |

Three families: a wide heavy grotesque for display, a serif italic for "flair" words inside headings, and a mono for labels. Flair words also carry an accent colour and a hand-drawn SVG underline.

### Spacing, depth and detail
- Radii: 20px (preview), 28px (cards), 32px (hero media), 40px (zone tops), 999px (pills).
- Hairlines at 16–22% ink opacity instead of solid borders; a 1.2–1.4px stroke for pills/ghost buttons.
- Shadows are large, soft and offset: `0 40px 80px -40px`, `0 30px 60px -34px`.
- Decorative: a pulsing dot, a spinning text-on-a-circle badge, big soft circle shapes behind card corners, dotted halftone patterns, glass pills (`backdrop-filter: blur`).
- Selection colour is the accent.

### Components
- **Nav:** fixed, transparent; a blurred gradient "pillbg" fades in after 10px scroll. Brand + dot, mono meta on the right, pill CTA. Colours invert over dark zones.
- **Buttons:** pill, ink fill. `::before` accent layer slides up (`translateY(102%) → 0`, .45s) on hover, the button lifts −2px, and the arrow moves +4px and rotates −45°. Ghost variant uses an inset box-shadow stroke.
- **Hero:** kicker → h1 → sub/CTAs row → full-width media panel with a live tag, caption and a spinning badge overlapping the top edge.
- **Marquee:** accent strip, two duplicated sets, stars spinning between items.
- **Service rows:** hairline-separated rows; hover slides the title 16px and colours it per row, pip fills and rotates −45°. A cursor-following preview card appears (desktop, fine pointer only).
- **Sticky stack:** cards `position: sticky` with increasing `top`, each scaled down as the next covers it.
- **Dark zone:** feed rows (mono, hairline), animated SVG map, 4 stat counters.
- **Quote:** large serif italic with an accent "pop" phrase and a rule-prefixed cite.
- **CTA:** coloured block, rounded top, giant h2, magnetic button, mailto link, giant outline wordmark bleeding off the bottom.
- **Footer:** single mono row.

### Animations (trigger → motion → easing/duration → implementation)
| # | Effect | Trigger | Motion | Easing / duration | Implementation |
|---|---|---|---|---|---|
| 1 | Word-rise headline | page load | each word `translateY(118%) rotate(3deg) → 0` inside an `overflow:hidden` mask | `--ease` (cubic-bezier(.22,.61,.2,1)), .9s, delay `i*70ms + 150ms` | CSS keyframes, `--i` custom property per word |
| 2 | Underline draw | load, 1.3s | SVG path `stroke-dashoffset 1 → 0` | ease, .9s | `pathLength="1"` + keyframes |
| 3 | fadeUp | load | opacity 0→1, `translateY(20px)→0` | ease, .8–.9s, staggered .1–1.4s | CSS keyframes |
| 4 | Media unveil | load, .55s | `clip-path: inset(0 0 100% 0) → inset(0)` | ease, 1.2s | CSS keyframes |
| 5 | Media parallax | scroll | inner layer `translateY((p−.5)*60px)` | linear with scroll | passive scroll + rAF |
| 6 | Badge spin | continuous | rotate 360° | linear, 16s | CSS keyframes |
| 7 | Pulse dot | continuous | opacity 1→.35 | ease-in-out, 2s | CSS keyframes |
| 8 | Marquee | continuous | `translateX(0 → −50%)` | linear, 30s; paused on hover | CSS keyframes |
| 9 | Manifesto fill | scroll | words switch from 20% ink to full colour as progress passes them | .4s colour transition | scroll + rAF, class toggling |
| 10 | Reveal | element enters viewport | opacity 0→1, `translateY(38px)→0` | ease, .9s, `.rv2–4` add .1–.3s delay | IntersectionObserver (threshold .12, rootMargin −60px), unobserve once |
| 11 | Row hover | pointer | title `translateX(16px)`, pip `rotate(−45deg)` + fill | ease, .45s | CSS transitions |
| 12 | Cursor preview | mousemove in rows | card lerps to cursor (`.14` factor), scale .8→1, rotate −4°→3° | ease, .35–.45s | rAF loop, desktop + `pointer:fine` only |
| 13 | Sticky stack | scroll | card `scale(1 − t*.05)` where t = overlap with next card | linear with scroll | scroll + rAF |
| 14 | Counters | stat 60% visible | number eases from 0 to target | cubic ease-out, 1.5s | IO + rAF, `textContent` |
| 15 | Magnetic button | mousemove near CTA | `translate(dx*.3, dy*.3)` within 120px range | none | mousemove, transform |
| 16 | Nav scrolled / theme | scroll | bg opacity; colour swap over dark zones | .4–.5s | scroll listener + rect checks |
| 17 | SVG map | continuous | dots along paths, ring pulse | 2.2–3.6s | SMIL `animateMotion` |
| 18 | Button hover fill | pointer | `::before translateY(102%)→0`, arrow +4px/−45° | ease .3–.45s | CSS transitions |

**Reduced motion:** a single `@media (prefers-reduced-motion: reduce)` block kills all animations/transitions, snaps every entrance state to "in", hides the preview, pauses SVG animations, and JS skips parallax/stack/preview/magnet/counters.

---

## 2. Zenetera audit

### Stack
Next.js 14.2 (app router), React 18, TypeScript, CSS Modules + one global stylesheet, `next/font` (Inter body, Montserrat headings), framer-motion for reveals/transitions, Formspree (`@formspree/react`) for the contact form, Sanity (`next-sanity`, studio at `/studio`, dev-only via middleware) for blog content, Vercel Analytics + Speed Insights, Google Analytics `G-TVT5MV6M2T` via `next/script`. `styled-components` is listed but unused.

### Pages and sections (order preserved in the redesign)
| Route | Sections | Notes |
|---|---|---|
| `/` | ReferralBanner → Hero → NicheSplit → Services → Testimonials → Process → FAQ (6 home categories, "see all" link) → FinalCTA (`#contact` form) | Hero contains the `DashboardIllustration` SVG |
| `/services` | ServicesDetail: hero, 7 alternating feature sections with SVG illustrations (`#web-development`, `#ecommerce`, `#chatbots`, `#booking`, `#branding`, `#ai-automation`, `#seo`), bottom CTA → `/products` | |
| `/products` | NicheIndex: hero, 3 niche cards (from `lib/niches.ts`), CTA | |
| `/villas`, `/beauty`, `/professional-services` | NicheTemplate: hero, 2 numbered sections with bullets, CTA (2 buttons) | data from `lib/niches.ts` |
| `/about` | AboutHero → AboutStory (3 paragraphs + 4 stats) → AboutValues (6 cards) → AboutApproach (4 pillars) → FinalCTA | |
| `/blog`, `/blog/[slug]` | BlogIndex (hero, category chips, search, featured, grid) + FinalCTA; BlogPost (hero, block renderer, related) + FinalCTA | Sanity, `revalidate = 60` |
| `/faq` | FAQ expanded (h1, all 10 categories, 51 Q&As, FAQPage JSON-LD) → FinalCTA | |
| `/work`, `/work/[slug]` | Hero (page variant) + WorkGrid; case-study stub | not in nav; in sitemap. Stylesheets reference undefined tokens (legacy) |
| `/pricing` | PricingHero → PricingPackages → PricingCompare → PricingCare | `noindex`, unlinked; CTAs link to `/contact` (no such route, pre-existing) |
| `/studio` | Sanity Studio | dev only |
| `robots.ts`, `sitemap.ts` | | unchanged |

Shared: Nav (Services, Products, Blog, About, Contact → `/#contact`, mobile menu), Footer (Services / Company / Social / Newsletter columns; Privacy, Terms, Cookie settings), ReferralBanner (home only).

Unused components (not imported by any page): `Industries`, `TrustStrip`, `WhatYouGain`, `ContactForm`, `ui/Button`. They reference images that do not exist in `public/`.

### Colour tokens (from `globals.css` and modules)
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#fafafa` | page |
| `--color-bg-alt` | `#f0f0f0` | alternate sections |
| `--color-bg-dark` | `#0a0a0a` | dark sections |
| `--color-bg-card` | `#ffffff` | cards |
| hero background | `#f5f5f7` | hero (hard-coded) |
| `--color-text` / heading | `#0a0a0a` / `#0d0d12` | |
| `--color-text-secondary` | `#4a4a4a` | |
| `--color-text-muted` | `#777777` | fails AA on `#fafafa` (4.28:1) |
| `--color-text-on-dark` | `#f5f5f5` | |
| `--color-accent` | `#D63B31` | brand red (logo "E") |
| `--color-accent-light` | `#E87561` | |
| `--color-accent-glow` | `rgba(214,59,49,.15)` | |
| `--color-border` / `-light` | `#e2e2e2` / `#efefef` | |
| gradient purples | `#7b5ea7`, `#6b0f3a`, `#7c1a60` | only inside animated gradients |

Assets: `logo.png` (mark), `logo-name.png` (wordmark, red "E"), `logo-full.png` (mark + IT / AI / B2B + wordmark), `favicon.*`. All service and dashboard illustrations are inline SVG components on `#111111` backgrounds using the accent.

Fonts: Inter (body) and Montserrat (display), both variable, loaded through `next/font/google`.

---

## 3. Plan

### Principles
- Zenetera copy, section order, links, IDs (`#contact`, `#how-it-works`, `#services`, `#industries`, service anchors), forms, SEO metadata, analytics, Sanity and routing stay exactly as they are.
- Colours are limited to the tokens above plus neutral tints/shades and one **tint of the accent** (`#FBE9E6`) for card backgrounds, standing in for the reference's pastel card fills. Two shades are added for AA contrast: `--color-accent-text: #C2332A` (small accent text on light backgrounds) and `--color-text-muted: #6b6b6b`.
- Fonts stay Inter + Montserrat. Montserrat 800, uppercase and tight tracking, carries the reference's wide-display feel; eyebrow labels use Inter 600 uppercase with wide tracking in place of the mono. *Suggested (not applied): a mono for labels and a serif italic for flair words — see summary.*
- Motion: CSS keyframes/transitions on `transform`/`opacity` only; IntersectionObserver reveals; the three scroll-linked effects (parallax, sticky stack, manifesto fill) use a single passive rAF-throttled listener each and read one rect. Every effect is disabled under `prefers-reduced-motion`.
- framer-motion is no longer imported (CSS covers everything); the dependency is left in `package.json` for you to remove. **No new dependencies.**

### Global layer
- `globals.css`: tokens (colours, `--pad`, `--ease`, fluid type scale, radii, hairlines), base styles, reveal classes, global `.eyebrow`, `.flair`, `.dark-zone`, reduced-motion block.
- `ui/Button` (primary / ghost / accent / on-dark, arrow, magnetic option), `ui/Eyebrow`, `ui/Card` (accent-tint / neutral / surface / dark tones), `ui/FeatureList` (hairline "wire rows").
- `motion/Reveal`, `motion/Counter`, `motion/Magnetic`, `motion/Marquee`, `motion/StickyStack`, `motion/ScrollFill`, `motion/useReducedMotion`.
- `layout/Nav` (sticky, blur-on-scroll, dark-zone theme swap via IO, full-screen mobile menu), `layout/Footer` (dark, giant outline wordmark, wire-row columns, newsletter, legal row), `layout/ReferralBanner` (thin strip, unchanged behaviour).

### Section mapping
| Zenetera section | Reference treatment |
|---|---|
| Home Hero | Kicker with pulsing dot (`Design. Develop. Automate. Grow.`), word-rise uppercase h1 with flair + underline draw on "digital infrastructure", hero-row with the site description as sub and the two CTAs, media panel (curtain unveil + parallax) holding the existing dashboard SVG, spinning badge built from the logo words (ZENETERA · IT · AI · B2B) |
| (new strip) | Accent marquee of existing labels: the four service categories and the three industry names |
| NicheSplit | Eyebrow `01 Industries`, big h2, scroll-fill subtitle; three tinted cards (accent tint / neutral / dark) with the circle shape, uppercase title, tagline, "Explore" pill |
| Services | Eyebrow `02 Services`; numbered hairline rows with hover slide + pip; cursor-following preview showing each service's existing illustration (desktop); illustration shown inline in the row on smaller screens |
| Testimonials | Dark zone (rounded top): eyebrow `03`, h2, two opposite-direction marquee rows of review cards (paused on hover; static grid under reduced motion) |
| Process | Eyebrow `04 Our process`; five sticky-stack cards (step label + big index on the left, title, description, deliverables as pills on the right); replaces the tab/arrow UI |
| FAQ (home + /faq) | Sticky two-column layout kept; category pills; hairline accordion rows with rotating "+" pip; expanded variant for `/faq` |
| FinalCTA | Dark CTA zone (rounded top): eyebrow, giant h2 "Let's work together", the same Formspree form restyled (underline inputs, pill radios, magnetic submit); success state kept |
| Page heroes (Services, Products, niches, About, Blog, Work, Pricing) | One `PageHero` component: eyebrow, word-rise h1 with optional flair, sub, CTAs, optional price |
| ServicesDetail / NicheTemplate sections | One `SplitFeature` component: eyebrow index, uppercase h2, body, wire-row bullets, illustration in a rounded panel; alternating sides and light / alt / dark zones |
| NicheIndex cards, Pricing packages, upgrade cards | `Card` tones with big price/number treatment |
| Bottom CTAs (Services, Products, niches) | `CtaBlock`: dark rounded-top block, big h2, magnetic primary + ghost buttons |
| About: Story / Values / Approach | Manifesto-style heading with scroll fill + 4-up counter stat grid; six glass cards in a dark zone; four numbered rows |
| Blog index / post | Pills, rounded featured card, tinted card art, gantry type scale; post body blocks restyled (stat, callout, quote, table) |
| Work / case study | Card grid with tinted art panels; stub page restyled |
| Pricing compare / care tables | Wire-row grids with hairlines |

### Copy changes (flagged)
1. `Design. Develop. Automate. Grow.` moves from below the headline to the kicker above it (unchanged text).
2. The site's meta description is surfaced as the hero sub-line to fill the reference's sub/CTA row. Remove one line in `Hero.tsx` to drop it.
3. The marquee and badge reuse existing labels only (service categories, industry names, logo words).
4. Process step tabs become a scroll stack; all copy identical.

### Stages (each committed)
1. Tokens + globals + shared UI/motion primitives
2. Nav, footer, banner, buttons
3. Home sections
4. Services, Products, niche pages, CTA block
5. About, FAQ, Blog, Work, Pricing
6. Verification: build, lint, dev server screenshots at 375 / 768 / 1440, reduced-motion pass, Lighthouse
