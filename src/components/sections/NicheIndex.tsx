import Button from "@/components/ui/Button";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import FeatureList from "@/components/ui/FeatureList";
import Reveal from "@/motion/Reveal";
import { NICHES } from "@/lib/niches";
import CtaBlock from "./CtaBlock";
import PageHero from "./PageHero";
import styles from "./NicheIndex.module.css";

const tones: CardTone[] = ["accent", "neutral", "dark"];

export default function NicheIndex() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Products"
        heading="Built for your industry, not everyone's"
        flair="everyone's"
        sub="Packaged websites and booking systems, shaped around how your industry actually wins customers. Same craft, different playbook."
      />

      <section className={`pad ${styles.section}`}>
        <div className={`wide ${styles.grid}`}>
          {NICHES.map((niche, i) => (
            <Reveal key={niche.slug} delay={i as 0 | 1 | 2} className={styles.cell}>
              <Card as="article" tone={tones[i % tones.length]} shape className={styles.card}>
                <Eyebrow compact as="span" className={styles.cardEyebrow}>
                  {niche.eyebrow}
                </Eyebrow>
                <h2 className={styles.cardTitle}>{niche.label}</h2>
                <p className={styles.cardTagline}>{niche.tagline}</p>

                <FeatureList items={niche.sections.map((section) => section.title)} className={styles.list} />

                {niche.priceFrom && <p className={styles.cardPrice}>From {niche.priceFrom}</p>}

                <div className={styles.cardAction}>
                  <Button href={`/${niche.slug}`} variant="ghost" size="sm">
                    Explore {niche.label}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBlock
        heading="Not sure which fits?"
        flair="fits?"
        text="Most businesses sit somewhere in between. Tell us how you work today and we'll point you at the right starting place."
        primary={{ label: "Book a free audit", href: "/#contact" }}
      />
    </>
  );
}
