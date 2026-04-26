"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogPost } from "@/content/blogs";
import styles from "./BlogIndex.module.css";

interface Props {
  posts: BlogPost[];
}

const ALL = "All";

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

  const filteredRest = rest.filter((p) => {
    const matchesCategory = active === ALL || p.category === active;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const showFeatured =
    (active === ALL || featured?.category === active) &&
    (!query ||
      featured?.title.toLowerCase().includes(query.toLowerCase()) ||
      featured?.excerpt.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ─── Hero ─────────────────────────────── */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>The Zenetera blog</span>
          <h1 className={styles.heading}>
            Playbooks for small businesses growing online.
          </h1>
          <p className={styles.lede}>
            Field notes, frameworks and honest takes from building websites,
            automation, chatbots and AI for small businesses and startups.
          </p>
        </motion.div>

        {/* ─── Toolbar ───────────────────────────── */}
        <motion.div
          className={styles.toolbar}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.filters} role="tablist" aria-label="Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`${styles.chip} ${active === cat ? styles.chipActive : ""}`}
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
        </motion.div>

        {/* ─── Featured ──────────────────────────── */}
        {featured && showFeatured && (
          <motion.div
            className={styles.featuredWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href={`/blog/${featured.slug}`} className={styles.featured}>
              <div className={styles.featuredArt}>
                <div className={styles.featuredGradient} />
                <span className={styles.featuredBadge}>Featured</span>
                <div className={styles.featuredMark}>Z.</div>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.featuredCategory}>
                  {featured.category}
                </span>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span>{featured.readTime}</span>
                  <span className={styles.dot} />
                  <span>Updated {featured.updated}</span>
                </div>
                <span className={styles.featuredCta}>
                  Read the article
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ─── Grid ──────────────────────────────── */}
        <div className={styles.gridHeader}>
          <h2 className={styles.gridTitle}>
            {active === ALL ? "All articles" : active}
          </h2>
          <span className={styles.gridCount}>
            {filteredRest.length +
              (showFeatured && featured ? 1 : 0)}{" "}
            post{filteredRest.length + (showFeatured ? 1 : 0) === 1 ? "" : "s"}
          </span>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredRest.length === 0 && !showFeatured ? (
            <motion.div
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>No articles match that yet.</p>
              <button
                className={styles.emptyReset}
                onClick={() => {
                  setActive(ALL);
                  setQuery("");
                }}
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className={styles.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredRest.map((post) => (
                <motion.article
                  key={post.slug}
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                    <div className={styles.cardArt}>
                      <span className={styles.cardMark}>Z.</span>
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.cardCategory}>
                        {post.category}
                      </span>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardMeta}>
                        <span>{post.readTime}</span>
                        <span className={styles.dot} />
                        <span>Updated {post.updated}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
