import { Fragment } from "react";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import StickyStack from "@/motion/StickyStack";
import styles from "./Process.module.css";

const steps = [
  {
    label: "Discovery & Design",
    title: "Discovery,\nScoping & Design",
    description:
      "We kick things off with strategy and style. Through a digital questionnaire, discovery workshop and visual moodboarding, we align creative direction with your goals. Then we design high-fidelity, interactive prototypes in Figma so you can experience the look, feel and flow before we build.",
    deliverables: [
      "Digital questionnaire and kick-off workshop",
      "UX strategy and moodboards agreed",
      "Homepage concept designed in Figma, with interactive prototyping",
      "Two rounds of revisions before design system rollout",
      "Template designs created and reviewed in Figma",
    ],
  },
  {
    label: "Develop & Test",
    title: "Development,\nEngineering & Testing",
    description:
      "Our specialist developers bring your approved designs to life with clean, scalable code. We build responsive and high-performance pages across all browsers and devices which are rigorously tested at every stage.",
    deliverables: [
      "Pixel-perfect build from approved Figma designs",
      "Responsive development across all breakpoints",
      "Cross-browser and device testing",
      "Performance optimisation and accessibility checks",
      "Staging site ready for client review",
    ],
  },
  {
    label: "Live Demo",
    title: "Live Demo\n& Review",
    description:
      "We walk you through the fully built site on a staging environment. You get hands-on time to explore, flag changes and confirm everything works exactly as expected before we go live.",
    deliverables: [
      "Full walkthrough on staging environment",
      "Interactive review session with your team",
      "Feedback captured and prioritised",
      "Final round of refinements applied",
      "Sign-off confirmation before launch prep",
    ],
  },
  {
    label: "Migration & Checks",
    title: "Migration,\nContent & Checks",
    description:
      "We handle the migration of your existing content, set up redirects, and run a comprehensive checklist of pre-launch checks to ensure nothing is missed when we switch over.",
    deliverables: [
      "Content migration from existing site",
      "301 redirects and URL mapping",
      "SEO meta tags and structured data verified",
      "Forms, integrations, and analytics tested",
      "Pre-launch checklist completed and signed off",
    ],
  },
  {
    label: "Launch & Support",
    title: "Launch\n& Ongoing Support",
    description:
      "We deploy your site to production and provide ongoing support to keep everything running smoothly. You're never left on your own after launch.",
    deliverables: [
      "Production deployment and DNS configuration",
      "Post-launch monitoring and performance checks",
      "Training session on CMS and content updates",
      "Ongoing maintenance and support plan",
      "Priority access for future updates and enhancements",
    ],
  },
];

const tones: CardTone[] = ["accent", "neutral", "surface", "accent2", "dark"];

function MultiLine({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

export default function Process() {
  return (
    <section id="how-it-works" className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="05">Our process</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Your Website journey
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            A structured, seamless process designed for impact.
          </Reveal>
        </div>

        <StickyStack>
          {steps.map((step, i) => (
            <Card key={step.label} as="article" tone={tones[i]} shape className={styles.card}>
              <div className={styles.when}>
                <span className={styles.label}>{step.label}</span>
                <b className={styles.big}>0{i + 1}</b>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  <MultiLine text={step.title} />
                </h3>
                <p className={styles.description}>{step.description}</p>
                <ul className={styles.notes}>
                  {step.deliverables.map((item) => (
                    <li key={item} className={styles.note}>
                      <i aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
