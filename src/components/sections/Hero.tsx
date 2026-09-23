import Button from "@/components/ui/Button";
import WordRise from "@/components/ui/WordRise";
import { STUDIO_STATS } from "@/content/stats";
import Counter from "@/motion/Counter";
import DottedWorldMap from "./DottedWorldMap";
import styles from "./Hero.module.css";

/* When the proof panel's fade-up begins (its animation-delay in the
   stylesheet); each stat starts counting a beat after the one before it. */
const PROOF_REVEAL_MS = 1150;
const PROOF_STAGGER_MS = 140;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.stage}>
        {/* Backdrop for the whole stage. The veil over it keeps the middle of
            the field calm, so a passing ripple never fights the headline. */}
        <DottedWorldMap className={styles.map} />
        <div className={styles.veil} aria-hidden="true" />

        <div className={`pad wide ${styles.inner}`}>
          <WordRise
            as="h1"
            className={styles.heading}
            text="We build the digital infrastructure your business runs on"
            flair="digital infrastructure"
          />

          <p className={styles.sub}>
            We help small businesses, freelancers, and entrepreneurs get more customers through
            websites, automation, and smarter online presence.
          </p>

          <div className={styles.ctas}>
            <Button href="/#contact" size="lg">
              Book a free audit
            </Button>
            <Button href="/#how-it-works" variant="ghost" size="lg" arrow="down">
              See how it works
            </Button>
          </div>
        </div>
      </div>

      {/* Proof under the CTAs: a frosted panel straddling the foot of the
          hero, the numbers counting up as it fades in. */}
      <div className={`pad ${styles.proof}`}>
        <ul className={styles.panel} aria-label="Zenetera in numbers">
          {STUDIO_STATS.map((stat, i) => (
            <li key={stat.label} className={styles.stat}>
              <Counter
                value={stat.value}
                className={styles.value}
                affixClassName={`flair ${styles.unit}`}
                revealAt={PROOF_REVEAL_MS + i * PROOF_STAGGER_MS}
              />
              <span className={styles.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
