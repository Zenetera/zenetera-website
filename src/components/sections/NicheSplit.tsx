import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import ScrollFill from "@/motion/ScrollFill";
import { NICHES } from "@/lib/niches";
import styles from "./NicheSplit.module.css";

const tones: CardTone[] = ["accent", "neutral", "dark"];

export default function NicheSplit() {
  return (
    <section className={`pad ${styles.section}`} id="industries">
      <div className="wide">
        <Reveal>
          <Eyebrow index="01">Industries</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Built for your business
          </Reveal>
          <ScrollFill
            className={styles.lede}
            text="We build the same systems every time, tuned to how your industry actually wins customers."
            highlight="actually wins customers."
          />
        </div>

        <div className={styles.grid}>
          {NICHES.map((niche, i) => (
            <Reveal key={niche.slug} delay={i as 0 | 1 | 2} className={styles.cell}>
              <Link href={`/${niche.slug}`} className={styles.cardLink}>
                <Card tone={tones[i % tones.length]} shape className={styles.card}>
                  <Eyebrow compact as="span" className={styles.cardEyebrow}>
                    {niche.eyebrow}
                  </Eyebrow>
                  <h3 className={styles.cardTitle}>{niche.label}</h3>
                  <p className={styles.cardTagline}>{niche.tagline}</p>
                  <span className={styles.note}>
                    <i aria-hidden="true" />
                    Explore
                    <Arrow size={14} className={styles.noteArrow} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={3} className={styles.more}>
          Plus restaurants, gyms, trades, clinics and plenty more.{" "}
          <Link href="/#contact" className={styles.moreLink}>
            Tell us about yours
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
