export interface NicheSection {
  title: string;
  body: string;
  bullets: string[];
}

export interface Niche {
  slug: string;
  label: string;
  eyebrow: string;
  tagline: string;
  heroHeading: string;
  heroBody: string;
  sections: NicheSection[];
  priceFrom?: string;
}

export const NICHES: Niche[] = [
  {
    slug: "villas",
    label: "Villas & Short Lets",
    eyebrow: "Hospitality",
    tagline: "Take direct bookings and stop paying platform commission.",
    heroHeading: "Your villa, booked direct",
    heroBody:
      "Airbnb and Booking.com take up to 18% of every stay. We build the site and booking system that lets guests come to you instead.",
    sections: [
      {
        title: "Direct booking engine",
        body: "Real-time availability, deposit handling and instant confirmation, so a guest can book at 2am without you touching anything.",
        bullets: [
          "Live availability calendar",
          "Deposit and balance payments via Stripe",
          "Automated confirmation and pre-arrival emails",
          "iCal sync with existing platform listings",
        ],
      },
      {
        title: "A property page that sells",
        body: "Full-bleed galleries, floor plans, local guides, and the details guests actually decide on.",
        bullets: [
          "Optimised image galleries with fast load",
          "Amenities, rules and local area guide",
          "Multi-language ready",
          "Guest reviews pulled in from platforms",
        ],
      },
    ],
  },
  {
    slug: "beauty",
    label: "Beauty & Wellness",
    eyebrow: "Salons, clinics & studios",
    tagline: "Fill the diary and cut no-shows.",
    heroHeading: "Bookings while you are with a client",
    heroBody:
      "You cannot answer the phone mid-treatment. Online booking and automated reminders mean you do not have to.",
    sections: [
      {
        title: "Booking and reminders",
        body: "Clients book their own slot against your live calendar and get reminded automatically.",
        bullets: [
          "Real-time availability by treatment and stylist",
          "Automated SMS and email reminders",
          "Calendar sync with Google, Outlook and Apple",
          "Deposit capture to protect against no-shows",
        ],
      },
      {
        title: "From Instagram to booked",
        body: "Most of your traffic is social, so we make the path from a DM to a confirmed appointment as short as possible.",
        bullets: [
          "Instagram and WhatsApp lead capture",
          "AI chatbot for pricing and treatment questions",
          "Treatment menu with transparent pricing",
          "Local SEO for map-pack rankings",
        ],
      },
    ],
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    eyebrow: "Consultants, trades & firms",
    tagline: "Look established. Qualify every enquiry.",
    heroHeading: "Win the job before the first call",
    heroBody:
      "When a client compares three quotes, the one with the credible website wins. We build that, plus the system that filters out the enquiries you do not want.",
    sections: [
      {
        title: "Credibility that converts",
        body: "Case studies, credentials, and clear service pages that make a small firm read as a serious one.",
        bullets: [
          "Case study and portfolio templates",
          "Accreditation and insurance display",
          "Service-by-service landing pages",
          "Location pages for local search",
        ],
      },
      {
        title: "Enquiry qualification",
        body: "Forms that ask the right questions up front so you stop quoting for work you do not want.",
        bullets: [
          "Multi-step qualifying enquiry forms",
          "Automatic lead routing and scoring",
          "Consultation booking with calendar sync",
          "Out-of-hours AI chatbot",
        ],
      },
    ],
  },
];

export function getNiche(slug: string): Niche | undefined {
  return NICHES.find((niche) => niche.slug === slug);
}
