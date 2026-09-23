import Button from "@/components/ui/Button";
import WordRise from "@/components/ui/WordRise";
import Reveal from "@/motion/Reveal";
import styles from "./CtaBlock.module.css";

interface CtaLink {
  label: string;
  href: string;
}

interface CtaBlockProps {
  heading: string;
  /** Phrase in `heading` rendered as accent flair. */
  flair?: string;
  text?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

/** Dark, rounded-top call-to-action block used at the bottom of inner pages. */
export default function CtaBlock({ heading, flair, text, primary, secondary }: CtaBlockProps) {
  return (
    <section className={`${styles.cta} zone-top`} data-theme="dark">
      <div className="pad wide">
        <Reveal>
          <WordRise as="h2" text={heading} flair={flair} animate={false} className={styles.heading} />
        </Reveal>
        {text && (
          <Reveal as="p" delay={1} className={styles.text}>
            {text}
          </Reveal>
        )}
        <Reveal delay={2} className={styles.row}>
          <Button href={primary.href} variant="light" size="lg" magnetic>
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="ghost" size="lg">
              {secondary.label}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
