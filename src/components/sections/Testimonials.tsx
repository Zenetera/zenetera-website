"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

interface Review {
  name: string;
  business: string;
  location: string;
  rating: number;
  quote: string;
}

const reviews: Review[] = [
  {
    name: "James Hargreaves",
    business: "Plumbing & Heating",
    location: "Manchester",
    rating: 5,
    quote:
      "Honestly didn\u2019t think I needed a proper website but these guys built something that actually looks professional. Two new customers found me through Google in the first month. Quick to respond, no nonsense, got it done fast.",
  },
  {
    name: "Natalia Kowalska",
    business: "Beauty Salon",
    location: "London",
    rating: 5,
    quote:
      "Really happy with how the site turned out. I gave them a rough idea and they just got it. The booking form works perfectly and my clients keep commenting on how nice it looks.",
  },
  {
    name: "Daniel Frost",
    business: "Electrical Contractor",
    location: "Birmingham",
    rating: 4,
    quote:
      "Needed a simple site to look more legit when quoting jobs. Delivered on time, fair price. Minor tweak needed after launch which they sorted same day. Good service.",
  },
  {
    name: "Marcus Webb",
    business: "Online Retail",
    location: "London",
    rating: 5,
    quote:
      "Had them build my e-commerce store from scratch. The product catalogue, checkout, the whole thing. Runs smoothly, looks clean, and the monthly care package means I never have to worry about it going down. Worth every penny.",
  },
  {
    name: "Olga Petrov",
    business: "Tutoring & Coaching",
    location: "Leeds",
    rating: 5,
    quote:
      "I\u2019m not technical at all but they made it very easy. Explained everything clearly, built exactly what I needed and I can actually update it myself now.",
  },
  {
    name: "Ryan Chambers",
    business: "Construction",
    location: "Bristol",
    rating: 5,
    quote:
      "Had a few quotes from other agencies and they were all way too expensive. ZENETERA was straightforward, affordable and the result is exactly what I was after.",
  },
  {
    name: "Sophie Brennan",
    business: "Yoga Studio",
    location: "Edinburgh",
    rating: 5,
    quote:
      "They set up a chatbot on my site and honestly it\u2019s been a game changer. Clients ask questions about classes and pricing at 11pm and get answers instantly. I wake up to bookings I didn\u2019t even have to take manually.",
  },
  {
    name: "Tom Rickard",
    business: "Cafe Owner",
    location: "Brighton",
    rating: 4,
    quote:
      "Got a new logo and a full brand kit done. Took a couple of rounds to get it exactly right but they were patient and the final result looks really sharp. People actually comment on it.",
  },
  {
    name: "Amir Sultani",
    business: "SaaS Startup",
    location: "London",
    rating: 5,
    quote:
      "We needed a web application with user logins and a custom dashboard. More complex than a typical website. They delivered something solid, on budget, and the ongoing support has been responsive whenever we\u2019ve had questions.",
  },
  {
    name: "Priya Nair",
    business: "Freelance Consultant",
    location: "Manchester",
    rating: 5,
    quote:
      "They handled the SEO setup and Google Analytics for me. I\u2019d had a site for two years but was basically invisible online. Within six weeks I started showing up for searches in my area. Should have done this much sooner.",
  },
];

// Split reviews into 3 columns
const columns: Review[][] = [
  [reviews[0], reviews[3], reviews[6], reviews[9]],
  [reviews[1], reviews[4], reviews[7]],
  [reviews[2], reviews[5], reviews[8]],
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="currentColor"
        >
          <path d="M9 1.5L11.3 6.2L16.5 6.9L12.8 10.5L13.6 15.7L9 13.2L4.4 15.7L5.2 10.5L1.5 6.9L6.7 6.2L9 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.card}>
      <Stars count={review.rating} />
      <blockquote className={styles.quote}>
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {review.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className={styles.name}>{review.name}</p>
          <p className={styles.role}>
            {review.business}, {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "up" | "down";
}) {
  // Duplicate once for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <div className={styles.columnWrapper}>
      <div
        className={`${styles.column} ${direction === "up" ? styles.scrollUp : styles.scrollDown}`}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.heading}>
            Trusted by businesses
            <br />
            across the UK
          </h2>
        </motion.div>

        <div className={styles.wall}>
          <div className={styles.fadeTop} />
          <div className={styles.fadeBottom} />
          <div className={styles.grid}>
            <ScrollColumn reviews={columns[0]} direction="up" />
            <ScrollColumn reviews={columns[1]} direction="down" />
            <ScrollColumn reviews={columns[2]} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
}
