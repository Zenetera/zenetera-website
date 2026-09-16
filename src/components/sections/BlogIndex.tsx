"use client";

import { useMemo, useState } from "react";
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

export default function BlogIndex({ posts }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return [ALL, ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  const q = query.trim().toLowerCase();
  const filteredRest = rest.filter((p) => {
    const matchesCategory = active === ALL || p.category === active;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const showFeatured =
    Boolean(featured) &&
    (active === ALL || featured?.category === active) &&
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
            <div className={styles.filters} role="group" aria-label="Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active === cat}
                  className={cx(styles.chip, active === cat && styles.chipActive)}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
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
