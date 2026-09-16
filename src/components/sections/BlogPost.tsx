import Link from "next/link";
import type { BlogBlock, BlogPost } from "@/content/blogs";
import Arrow from "@/components/ui/Arrow";
import Card from "@/components/ui/Card";
import Reveal from "@/motion/Reveal";
import styles from "./BlogPost.module.css";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

export default function BlogPostView({ post, related }: Props) {
  return (
    <article className={styles.article}>
      {/* ─── Hero ──────────────────────────────── */}
      <header className={`pad ${styles.hero}`}>
        <div className={styles.heroInner}>
          <Link href="/blog" className={styles.backLink}>
            <Arrow size={14} rotate={180} />
            All articles
          </Link>

          <div className={styles.heroCopy}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>{post.readTime}</span>
              <span className={styles.dot} />
              <span>Updated {post.updated}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Body ──────────────────────────────── */}
      <div className={`pad ${styles.body}`}>
        <div className={styles.content}>
          {post.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
      </div>

      {/* ─── Related ───────────────────────────── */}
      {related.length > 0 && (
        <section className={`pad ${styles.relatedSection}`}>
          <div className="wide">
            <Reveal className={styles.relatedHeader}>
              <h2 className={styles.relatedHeading}>Keep reading</h2>
              <Link href="/blog" className={styles.relatedAll}>
                All articles
                <Arrow size={14} />
              </Link>
            </Reveal>
            <div className={styles.relatedGrid}>
              {related.map((rp, i) => (
                <Reveal key={rp.slug} delay={i as 0 | 1} className={styles.relatedCell}>
                  <Link href={`/blog/${rp.slug}`} className={styles.relatedLink}>
                    <Card tone={i === 0 ? "accent" : "surface"} shape compact className={styles.relatedCard}>
                      <span className={styles.category}>{rp.category}</span>
                      <h3 className={styles.relatedTitle}>{rp.title}</h3>
                      <p className={styles.relatedExcerpt}>{rp.excerpt}</p>
                      <span className={styles.relatedMeta}>{rp.readTime}</span>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

/* ───────── Block renderer ───────── */
function BlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className={styles.paragraph}>{block.text}</p>;

    case "heading":
      if (block.level === 2) {
        return <h2 className={styles.h2}>{block.text}</h2>;
      }
      return <h3 className={styles.h3}>{block.text}</h3>;

    case "list":
      if (block.style === "number") {
        return (
          <ol className={styles.orderedList}>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul className={styles.unorderedList}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <aside className={styles.callout}>
          <i className={styles.calloutDot} aria-hidden="true" />
          <p>{block.text}</p>
        </aside>
      );

    case "stat":
      return (
        <div className={styles.stat}>
          <span className={styles.statValue}>{block.value}</span>
          <span className={styles.statLabel}>{block.label}</span>
        </div>
      );

    case "quote":
      return (
        <blockquote className={styles.quote}>
          <p>{block.text}</p>
          {block.attribution && <cite className={styles.quoteCite}>{block.attribution}</cite>}
        </blockquote>
      );

    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "divider":
      return <hr className={styles.divider} />;

    default:
      return null;
  }
}
