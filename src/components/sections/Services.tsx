import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import styles from "./Services.module.css";

interface Service {
  category: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    category: "Websites",
    title: "Website development that converts",
    description: "Landing pages and business websites designed to turn visitors into paying customers.",
    href: "/services#web-development",
  },
  {
    category: "Automation",
    title: "Booking automation & reminders",
    description: "Automated appointment reminders and booking systems that reduce no-shows by 40%.",
    href: "/services#booking",
  },
  {
    category: "Chatbots",
    title: "AI chatbots & messaging",
    description: "Chatbots for websites, WhatsApp, and Instagram that capture leads automatically 24/7.",
    href: "/services#chatbots",
  },
  {
    category: "Google",
    title: "Google business optimisation",
    description: "Dominate local search results and Google Maps so customers find you first.",
    href: "/services#seo",
  },
];

export default function Services() {
  return (
    <section className={`pad ${styles.section}`} id="services">
      <div className="wide">
        <Reveal>
          <Eyebrow index="02">Services</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Everything you need to grow
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            From first impression to repeat customer, we build the systems that make it happen.
          </Reveal>
        </div>

        <div className={styles.rows}>
          {services.map((service, i) => (
            <Reveal key={service.title} className={styles.row}>
              <Link href={service.href} className={styles.rowLink}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.text}>
                  <span className={styles.category}>{service.category}</span>
                  <h3 className={styles.title}>{service.title}</h3>
                </span>
                <p className={styles.desc}>{service.description}</p>
                <span className={styles.pip}>
                  <Arrow size={18} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
