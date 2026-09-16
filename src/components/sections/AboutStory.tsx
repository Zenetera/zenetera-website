import Eyebrow from "@/components/ui/Eyebrow";
import Counter from "@/motion/Counter";
import Reveal from "@/motion/Reveal";
import ScrollFill from "@/motion/ScrollFill";
import styles from "./AboutStory.module.css";

const stats = [
  { value: "50+", label: "UK businesses launched" },
  { value: "96%", label: "client retention" },
  { value: "2×", label: "average lead uplift" },
  { value: "< 1 day", label: "response to every enquiry" },
];

export default function AboutStory() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="01">Our story</Eyebrow>
        </Reveal>

        <ScrollFill
          as="h2"
          className={styles.heading}
          text="Built to make small-business tech feel simple again."
          highlight="simple again."
        />

        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p>
              ZENETERA started because the UK small-business market was being quietly underserved. They were told
              they needed websites, automations and AI but priced out of the agencies that could actually build them
              properly.
            </p>
            <p>
              So we built a studio that works the other way around: transparent pricing, tight timelines and a
              delivery model that treats a two-person trades business with the same care as a SaaS startup.
            </p>
            <p>
              Today we work with owner-operators across the UK on websites, booking automation, AI chatbots,
              e-commerce and the quiet infrastructure that turns online visibility into booked jobs.
            </p>
          </Reveal>

          <Reveal delay={1} className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <Counter value={stat.value} className={styles.statValue} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
