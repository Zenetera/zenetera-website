"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/content/blogs";
import Arrow from "@/components/ui/Arrow";
import Card, { type CardTone } from "@/components/ui/Card";
import Reveal from "@/motion/Reveal";
import { cx } from "@/lib/cx";
import PageHero from "./PageHero";
import styles from "./BlogIndex.module.css";

interface Props {
  posts: BlogPost[];
}

const ALL = "All";
const tones: CardTone[] = ["accent", "neutral", "dark"];

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* Authors have saved the same category with stray whitespace, which otherwise
   splits one category into two identical-looking filters. */
const normalise = (category?: string) => (category ?? "").trim();

const labelFor = (category: string) => (category === ALL ? "All categories" : category);

export default function BlogIndex({ posts }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      const category = normalise(p.category);
      if (category) set.add(category);
    });
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Close the category menu on an outside click or Escape. */
  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const countFor = (cat: string) =>
    cat === ALL ? posts.length : posts.filter((p) => normalise(p.category) === cat).length;

  const choose = (cat: string) => {
    setActive(cat);
    setMenuOpen(false);
  };

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  const q = query.trim().toLowerCase();
  const filteredRest = rest.filter((p) => {
    const matchesCategory = active === ALL || normalise(p.category) === active;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      normalise(p.category).toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const showFeatured =
    Boolean(featured) &&
    (active === ALL || normalise(featured?.category) === active) &&
    (!q || featured?.title.toLowerCase().includes(q) || featured?.excerpt.toLowerCase().includes(q));

  const count = filteredRest.length + (showFeatured ? 1 : 0);

  return (
    <>
      <PageHero
        eyebrow="The ZENETERA blog"
        heading="Playbooks for small businesses growing online."
        flair="growing online."
        sub="Field notes, frameworks and honest takes from building websites, automation, chatbots and AI for small businesses and startups."
      />

      <section className={`pad ${styles.section}`}>
        <div className="wide">
          {/* ─── Toolbar ───────────────────────────── */}
          <div className={styles.toolbar}>
            {/* Ten-odd categories, several of them long phrases, made a wall of
                pills here. One control instead: a menu on pointer screens, the
                native picker on phones. */}
            <div className={styles.filter} ref={menuRef}>
              <button
                ref={triggerRef}
                type="button"
                className={cx(styles.filterTrigger, menuOpen && styles.filterTriggerOpen)}
                aria-expanded={menuOpen}
                aria-controls="blog-category-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className={styles.filterEyebrow}>Category</span>
                <span className={styles.filterValue}>{labelFor(active)}</span>
                <Chevron className={styles.filterChevron} />
              </button>

              {/* Hidden rather than unmounted so it can transition; visibility
                  keeps it out of the tab order and the accessibility tree. */}
              <div id="blog-category-menu" className={cx(styles.menu, menuOpen && styles.menuOpen)}>
                <ul className={styles.menuList}>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        tabIndex={menuOpen ? 0 : -1}
                        aria-pressed={active === cat}
                        className={cx(styles.menuItem, active === cat && styles.menuItemActive)}
                        onClick={() => choose(cat)}
                      >
                        <span className={styles.menuLabel}>{labelFor(cat)}</span>
                        <span className={styles.menuCount}>{countFor(cat)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.selectWrap}>
              <label htmlFor="blog-category" className="sr-only">
                Filter by category
              </label>
              <select
                id="blog-category"
                className={styles.select}
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {labelFor(cat)} ({countFor(cat)})
                  </option>
                ))}
              </select>
              <Chevron className={styles.selectIcon} />
            </div>

            <label className={styles.searchWrap}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                className={styles.search}
                placeholder="Search posts…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search blog posts"
              />
            </label>
          </div>

          {/* ─── Featured ──────────────────────────── */}
          {featured && showFeatured && (
            <Reveal className={styles.featuredWrap}>
              <Link href={`/blog/${featured.slug}`} className={styles.featured}>
                <div className={styles.featuredArt}>
                  <span className={styles.featuredBadge}>Featured</span>
                  <span className={styles.featuredMark} aria-hidden="true">
                    Z.
                  </span>
                </div>
                <div className={styles.featuredBody}>
                  <span className={styles.category}>{featured.category}</span>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <div className={styles.meta}>
                    <span>{featured.readTime}</span>
                    <span className={styles.dot} />
                    <span>Updated {featured.updated}</span>
                  </div>
                  <span className={styles.featuredCta}>
                    Read the article
                    <Arrow size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* ─── Grid ──────────────────────────────── */}
          <div className={styles.gridHeader}>
            <h2 className={styles.gridTitle}>{active === ALL ? "All articles" : active}</h2>
            <span className={styles.gridCount}>
              {count} post{count === 1 ? "" : "s"}
            </span>
          </div>

          {filteredRest.length === 0 && !showFeatured ? (
            <div className={styles.empty}>
              <p>No articles match that yet.</p>
              <button
                type="button"
                className={styles.emptyReset}
                onClick={() => {
                  setActive(ALL);
                  setQuery("");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div key={`${active}-${q}`} className={styles.grid}>
              {filteredRest.map((post, i) => (
                <article key={post.slug} className={styles.cell} style={{ animationDelay: `${(i % 3) * 70}ms` }}>
                  <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                    <Card tone={tones[i % tones.length]} shape compact className={styles.card}>
                      <span className={styles.cardMark} aria-hidden="true">
                        Z.
                      </span>
                      <span className={styles.category}>{post.category}</span>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.meta}>
                        <span>{post.readTime}</span>
                        <span className={styles.dot} />
                        <span>Updated {post.updated}</span>
                      </div>
                    </Card>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
