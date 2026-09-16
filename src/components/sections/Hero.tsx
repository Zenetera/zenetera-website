import Arrow from "@/components/ui/Arrow";
import Button from "@/components/ui/Button";
import WordRise from "@/components/ui/WordRise";
import Marquee from "@/motion/Marquee";
import { NICHES } from "@/lib/niches";
import DashboardIllustration from "./DashboardIllustration";
import HeroMedia from "./HeroMedia";
import styles from "./Hero.module.css";

/* Existing labels only: the four service categories and the three industries. */
const marqueeItems = ["Websites", "Automation", "Chatbots", "Google", ...NICHES.map((n) => n.label)];

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={styles.star}>
      <path d="M8 0l1.8 6.2L16 8l-6.2 1.8L8 16l-1.8-6.2L0 8l6.2-1.8z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`pad wide ${styles.inner}`}>
        <p className={styles.kicker}>
          <i className="pulse" aria-hidden="true" />
          Design. Develop. Automate. Grow.
        </p>

        <WordRise
          as="h1"
          className={styles.heading}
          text="We build the digital infrastructure your business runs on"
          flair="digital infrastructure"
        />

        <div className={styles.row}>
          <p className={styles.sub}>
            We help small businesses, freelancers, and entrepreneurs get more customers through websites,
            automation, and smarter online presence.
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

        <div className={styles.mediaWrap}>
          <div className={styles.badge} aria-hidden="true">
            <svg className={styles.ring} viewBox="0 0 120 120">
              <defs>
                <path id="hero-badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <circle className={styles.ringBg} cx="60" cy="60" r="60" />
              <text>
                <textPath href="#hero-badge-circle">Zenetera · IT · AI · B2B · Zenetera · IT · AI · B2B ·&#160;</textPath>
              </text>
            </svg>
            <span className={styles.core}>
              <Arrow size={22} rotate={90} />
            </span>
          </div>

          <HeroMedia>
            <DashboardIllustration cover />
          </HeroMedia>
        </div>
      </div>

      <Marquee className={styles.marquee} duration={34} decorative>
        {marqueeItems.map((item) => (
          <span key={item} className={styles.marqueeItem}>
            <span>{item}</span>
            <Star />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
