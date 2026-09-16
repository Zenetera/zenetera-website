import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import styles from "./AboutApproach.module.css";

const pillars = [
  {
    number: "01",
    title: "Start with the outcome",
    text: "Before we touch Figma, we ask: what does a good month look like for this business? More bookings? Fewer admin hours? Better leads? Every build is reverse-engineered from there.",
  },
  {
    number: "02",
    title: "Build lean, ship fast",
    text: "We don't over-engineer. Tight scopes mean we launch in weeks, not quarters. So you start seeing the return before your next quarterly review.",
  },
  {
    number: "03",
    title: "Automate the boring stuff",
    text: "Appointment reminders, lead capture, FAQ responses, follow-ups. If a human has to do it more than once a week, we probably shouldn't be doing it at all.",
  },
  {
    number: "04",
    title: "Stay close after launch",
    text: "Launch day isn't the finish line. We stick around for the first 30 days, measure what matters, and tune what isn't pulling its weight.",
  },
];

export default function AboutApproach() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="03">How we work</Eyebrow>
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          A deliberate, pragmatic approach
        </Reveal>

        <div className={styles.rows}>
          {pillars.map((p) => (
            <Reveal key={p.number} className={styles.row}>
              <span className={styles.num}>{p.number}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
