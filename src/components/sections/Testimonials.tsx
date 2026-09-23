"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import Marquee from "@/motion/Marquee";
import Reveal from "@/motion/Reveal";
import { useReducedMotion } from "@/motion/useReducedMotion";
import styles from "./Testimonials.module.css";

interface Review {
  name: string;
  business: string;
  location: string;
  rating: number;
  quote: string;
}

/* Ordered so that each marquee row gets a spread of lengths and tones, rather
   than all the long quotes landing in the same track. */
const reviews: Review[] = [
  {
    name: "James Hargreaves",
    business: "Plumbing & Heating",
    location: "Manchester",
    rating: 5,
    quote:
      "Honestly didn’t think I needed a proper website but these guys built something that actually looks professional. Two new customers found me through Google in the first month. Quick to respond, no nonsense, got it done fast.",
  },
  {
    name: "Hannah Obi",
    business: "Nail Technician",
    location: "Birmingham",
    rating: 5,
    quote: "Fast, fair, no jargon. Exactly what I needed.",
  },
  {
    name: "Claudia Ferrer",
    business: "Villa Rentals",
    location: "Marbella",
    rating: 5,
    quote:
      "I’ve let two properties on the coast for six years and was handing nearly a fifth of every booking to the platforms. Wasn’t convinced a direct site would pull anything in on its own. Eleven bookings came through it last season and the calendar sync means I haven’t had a single double booking. Only thing I’d say is I should have asked for the second language at the start instead of adding it on later.",
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
    name: "Sophie Brennan",
    business: "Yoga Studio",
    location: "Edinburgh",
    rating: 5,
    quote:
      "They set up a chatbot on my site and honestly it’s been a game changer. Clients ask questions about classes and pricing at 11pm and get answers instantly. I wake up to bookings I didn’t even have to take manually.",
  },
  {
    name: "Helen Ashworth",
    business: "Accountancy Practice",
    location: "Leeds",
    rating: 4,
    quote:
      "A professional engagement throughout. Requirements were scoped properly, timelines were communicated clearly, and the handover notes meant our own staff could take over routine updates without difficulty. We would use them again.",
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
    name: "Kevin Doyle",
    business: "Roofing",
    location: "Dublin",
    rating: 5,
    quote: "Site’s live, it works, the phone rings. Can’t ask for much more than that.",
  },
  {
    name: "Lorna Whitfield",
    business: "Dog Grooming",
    location: "Newcastle",
    rating: 5,
    quote:
      "Third agency I’d tried. The first two took a deposit and handed back a template with my logo dropped on it. This lot actually asked what my customers care about before they designed anything, and you can tell.",
  },
  {
    name: "Peter Nkemelu",
    business: "Man & Van",
    location: "Luton",
    rating: 4,
    quote:
      "Does what it says on the tin. Site is clean and quick and the care plan is decent value. I’d have liked more help writing the copy, I ended up doing most of it myself, though in fairness that is what we agreed at the start.",
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
    name: "Mariam Haddad",
    business: "Aesthetics Clinic",
    location: "Amsterdam",
    rating: 5,
    quote:
      "I opened the clinic on my own two years ago with no real idea how to get anyone to find me. I had tried building something myself and it was embarrassing, I used to hope people wouldn’t look. They were patient with me, explained things twice when I needed it, and never once made me feel silly for asking. I’m booked three weeks ahead now and I’ve taken on a second therapist.",
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
    name: "Stuart Payne",
    business: "Scaffolding",
    location: "Sheffield",
    rating: 4,
    quote: "No complaints. Did what they said, when they said. Been up eight months without a hiccup.",
  },
  {
    name: "Amir Sultani",
    business: "SaaS Startup",
    location: "London",
    rating: 5,
    quote:
      "We needed a web application with user logins and a custom dashboard. More complex than a typical website. They delivered something solid, on budget, and the ongoing support has been responsive whenever we’ve had questions.",
  },
  {
    name: "Rachid Benali",
    business: "Immigration Advice",
    location: "Dubai",
    rating: 5,
    quote:
      "Our enquiry form was bringing in maybe two submissions a month. They rebuilt the landing page, added the WhatsApp button and set up the automated follow-up. We are averaging fourteen a month now. Three weeks start to finish.",
  },
  {
    name: "Olga Petrov",
    business: "Tutoring & Coaching",
    location: "Leeds",
    rating: 5,
    quote:
      "I’m not technical at all but they made it very easy. Explained everything clearly, built exactly what I needed and I can actually update it myself now.",
  },
  {
    name: "Gavin Muir",
    business: "Car Detailing",
    location: "Glasgow",
    rating: 4,
    quote:
      "Good work overall. Communication went quiet for a week or two in the middle and I had to chase for an update, which was annoying at the time. Once I flagged it they were straight back on it and the finished site is better than I pictured. Would still recommend, just agree a weekly check-in up front.",
  },
  {
    name: "Priya Nair",
    business: "Freelance Consultant",
    location: "Manchester",
    rating: 5,
    quote:
      "They handled the SEO setup and Google Analytics for me. I’d had a site for two years but was basically invisible online. Within six weeks I started showing up for searches in my area. Should have done this much sooner.",
  },
  {
    name: "Tom Rickard",
    business: "Cafe Owner",
    location: "Brighton",
    rating: 4,
    quote:
      "Got a new logo and a full brand kit done. Took a couple of rounds to get it exactly right but they were patient and the final result looks really sharp. People actually comment on it.",
  },
];

/* Split down the middle, so the two rows stay even as reviews are added. */
const half = Math.ceil(reviews.length / 2);
const rowA = reviews.slice(0, half);
const rowB = reviews.slice(half);

/* Scroll speed is set per card rather than per row: a longer list lengthens the
   loop instead of making the whole track run faster. */
const SECONDS_PER_CARD = 15;

const AVERAGE = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

function Star({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M9 1.5L11.3 6.2L16.5 6.9L12.8 10.5L13.6 15.7L9 13.2L4.4 15.7L5.2 10.5L1.5 6.9L6.7 6.2L9 1.5Z" />
    </svg>
  );
}

/* Five stars drawn twice: a muted row with the accent row clipped over it, so
   a 4.7 shows as four and seven tenths rather than rounding itself up. */
function StarMeter({ value }: { value: number }) {
  return (
    <span className={styles.meter} role="img" aria-label={`${value.toFixed(1)} out of 5 stars`}>
      <span className={styles.meterBase} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} />
        ))}
      </span>
      <span className={styles.meterFill} style={{ width: `${(value / 5) * 100}%` }} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} />
        ))}
      </span>
    </span>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className={styles.card}>
      <Stars count={review.rating} />
      <blockquote className={styles.quote}>&ldquo;{review.quote}&rdquo;</blockquote>
      <footer className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {initials}
        </span>
        <span>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.role}>
            {review.business}, {review.location}
          </span>
        </span>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section className={`${styles.section} zone-top`} data-theme="dark">
      <div className="pad wide">
        <Reveal>
          <Eyebrow index="04">Testimonials</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Trusted by businesses
            <br />
            around the globe
          </Reveal>

          <Reveal delay={1} className={styles.rating}>
            <span className={styles.ratingValue}>
              {AVERAGE.toFixed(1)}
              <span className={styles.ratingOutOf}>/5</span>
            </span>
            <StarMeter value={AVERAGE} />
            <span className={styles.ratingLabel}>From 37 client reviews</span>
          </Reveal>
        </div>
      </div>

      {reduced ? (
        <div className="pad wide">
          <div className={styles.grid}>
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      ) : (
        <Reveal className={styles.rows}>
          <Marquee duration={rowA.length * SECONDS_PER_CARD} gap="20px" setClassName={styles.track}>
            {rowA.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
          <Marquee
            duration={rowB.length * SECONDS_PER_CARD + 10}
            direction="right"
            gap="20px"
            setClassName={styles.track}
          >
            {rowB.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </Marquee>
        </Reveal>
      )}
    </section>
  );
}
