import type { CaseStudy as CaseStudyData, WorkSection } from "@/lib/types";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import FeatureList from "@/components/ui/FeatureList";
import Counter from "@/motion/Counter";
import Reveal from "@/motion/Reveal";
import { cx } from "@/lib/cx";
import CtaBlock from "./CtaBlock";
import PageHero from "./PageHero";
import WorkCard from "./WorkCard";
import WorkMedia, { WorkArt } from "./WorkMedia";
import styles from "./CaseStudy.module.css";

interface CaseStudyProps {
  study: CaseStudyData;
  /** The project linked at the end of the page. */
  next?: CaseStudyData;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Full case study: headline hero with "Visit site", details row, cover,
 * numbered story sections with galleries, results grid and quote,
 * next project and the closing CTA.
 */
export default function CaseStudy({ study, next }: CaseStudyProps) {
  const details = [
    { label: "Client", value: study.client },
    { label: "Sector", value: study.sector },
    ...(study.location ? [{ label: "Location", value: study.location }] : []),
    { label: "Services", value: study.services.join(", ") },
    { label: "Year", value: study.year },
  ];

  const hasStats = Boolean(study.stats?.length);
  const hasQuote = Boolean(study.testimonial);

  return (
    <article>
      <PageHero
        eyebrow={study.client}
        heading={study.title}
        size="md"
        width="contain"
        sub={study.summary}
      >
        {study.liveUrl && (
          <Button href={study.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit site
          </Button>
        )}
        <Button href="/work" variant="ghost" arrow="none">
          All work
        </Button>
      </PageHero>

      {/* ─── Details + cover ───────────────────────── */}
      <section className={`pad ${styles.intro}`}>
        <div className="contain">
          <Reveal>
            <dl className={styles.details}>
              {details.map((item) => (
                <div key={item.label} className={styles.detail}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={1}>
            {study.cover ? (
              <WorkMedia
                image={study.cover}
                aspect="16 / 9"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            ) : (
              <WorkArt client={study.client} aspect="16 / 9" />
            )}
          </Reveal>
        </div>
      </section>

      {/* ─── Story sections ────────────────────────── */}
      {study.sections.map((section, i) => (
        <StorySection key={i} section={section} index={pad(i + 1)} />
      ))}

      {/* ─── Results ───────────────────────────────── */}
      {(hasStats || hasQuote) && (
        <section className={`pad ${styles.results}`}>
          <div className="contain">
            <Reveal>
              <Eyebrow index={pad(study.sections.length + 1)}>
                {hasStats ? "In numbers" : "In their words"}
              </Eyebrow>
            </Reveal>

            <div
              className={cx(styles.resultsGrid, !(hasStats && hasQuote) && styles.resultsSingle)}
            >
              {hasStats && (
                <Reveal className={styles.stats}>
                  {study.stats!.map((stat) => (
                    <div key={stat.label} className={styles.stat}>
                      <Counter value={stat.value} className={styles.statValue} />
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </Reveal>
              )}

              {hasQuote && (
                <Reveal as="blockquote" delay={1} className={styles.quote}>
                  <p>&ldquo;{study.testimonial!.text}&rdquo;</p>
                  <footer className={styles.quoteFooter}>
                    <cite className={styles.quoteName}>{study.testimonial!.name}</cite>
                    <span className={styles.quoteRole}>{study.testimonial!.role}</span>
                  </footer>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── Next project ──────────────────────────── */}
      {next && (
        <section className={`pad ${styles.next}`}>
          <div className="contain">
            <Reveal>
              <Eyebrow>Next project</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <WorkCard study={next} variant="lead" headingLevel="h2" />
            </Reveal>
          </div>
        </section>
      )}

      <CtaBlock
        heading="Want results like these?"
        flair="like these?"
        text="Tell us about your business and we will show you what a project like this would look like for you."
        primary={{ label: "Start a project", href: "/#contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </article>
  );
}

function StorySection({ section, index }: { section: WorkSection; index: string }) {
  const media = section.media ?? [];
  // One screenshot sits in the text column, narrow enough that a 1600px file
  // stays sharp on a 2x screen. A pair of phone shots needs the full width.
  const single = media.length === 1 ? media[0] : undefined;
  const pair = media.length > 1;

  return (
    <section className={`pad ${styles.block}`}>
      <div className={`contain ${styles.blockGrid}`}>
        <Reveal as="h2" className={styles.blockHeading}>
          <span className={styles.blockIndex}>{index}</span>
          {section.heading}
        </Reveal>

        <div className={styles.blockBody}>
          {section.lede && (
            <Reveal as="p" className={styles.lede}>
              {section.lede}
            </Reveal>
          )}
          {section.body.map((paragraph, i) => (
            <Reveal as="p" key={i} delay={1} className={styles.para}>
              {paragraph}
            </Reveal>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <Reveal delay={2} className={styles.bullets}>
              <FeatureList items={section.bullets} />
            </Reveal>
          )}
          {single && (
            <Reveal className={styles.inlineMedia}>
              <WorkMedia
                image={single}
                aspect="16 / 10"
                sizes="(max-width: 880px) 100vw, (max-width: 1200px) 62vw, 780px"
              />
            </Reveal>
          )}
        </div>
      </div>

      {pair && (
        <div className={cx("contain", styles.gallery)}>
          {media.map((image, i) => (
            <Reveal key={image.src} delay={(i % 2) as 0 | 1}>
              <WorkMedia
                image={image}
                aspect="4 / 3"
                sizes="(max-width: 880px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
