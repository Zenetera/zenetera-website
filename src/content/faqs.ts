export const FAQ_CATEGORIES = [
  "Why ZENETERA",
  "Pricing & Plans",
  "AI & Automation",
  "Development Process",
  "Support & Maintenance",
  "Ownership & Security",
  "Villas & Short Lets",
  "Beauty & Wellness",
  "Trades & Professional Services",
  "Real Estate",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

/** Categories shown in the homepage FAQ block. The niche categories are written
 *  as answer-engine targets and live on /faq only. */
export const HOME_FAQ_CATEGORIES: readonly FaqCategory[] = [
  "Why ZENETERA",
  "Pricing & Plans",
  "AI & Automation",
  "Development Process",
  "Support & Maintenance",
  "Ownership & Security",
];

export interface FaqLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
  /** Optional deep link to the service or niche page the answer describes. */
  link?: FaqLink;
}

export const faqs: FaqItem[] = [
  // ── Why ZENETERA ─────────────────────────────────────
  {
    question: "Why choose ZENETERA?",
    answer:
      "Because we build the whole system, not just the website. Most agencies hand over a design and leave you to work out bookings, enquiries and follow-up on your own. ZENETERA builds the site, the booking or enquiry system and the automation around it, then keeps it running under a monthly care plan covering hosting, security, monitoring and support. Packages are shaped around specific industries, so you get a system built for how your business actually wins customers, and you own it outright once it is paid for.",
    category: "Why ZENETERA",
    link: { href: "/products", label: "See what we build" },
  },
  {
    question: "What makes ZENETERA different from other agencies?",
    answer:
      "We don't just design websites. We build intelligent digital systems combining AI, automation, infrastructure and long-term technical care so your business doesn't just look good online, it operates smarter.",
    category: "Why ZENETERA",
  },
  {
    question: "Who does ZENETERA work with?",
    answer:
      "Small businesses, freelancers and entrepreneurs across the UK and internationally, with packaged offerings for villa and short let owners, beauty and wellness businesses, and professional service firms including consultants and trades. If your business doesn't fit neatly into one of those, the same components (website, booking, automation, chatbot, SEO) are assembled around how you actually work.",
    category: "Why ZENETERA",
    link: { href: "/products", label: "Built for your industry" },
  },

  // ── Pricing & Plans ──────────────────────────────────
  {
    question: "How much does it cost?",
    answer:
      "Every business is different, so we tailor our pricing to your needs. The final price is calculated based on the number of pages, features and integrations your project requires. Book a free audit and we'll give you a transparent quote with no hidden fees.",
    category: "Pricing & Plans",
    link: { href: "/products", label: "See our packages" },
  },
  {
    question: "How is the final price calculated?",
    answer:
      "We use a step-based pricing model. Your quote is built from the number of pages, the features you need (booking systems, contact forms, dashboards) and any third-party integrations. This keeps pricing transparent and tailored to your exact requirements.",
    category: "Pricing & Plans",
  },
  {
    question: "Why is there a monthly care cost?",
    answer:
      "Websites and apps require hosting, security updates, monitoring, backups and technical support. Monthly care ensures your system stays fast, secure and online so you can focus on running your business, not managing servers.",
    category: "Pricing & Plans",
  },
  {
    question: "Can I host the website myself?",
    answer:
      "Yes, but most clients choose ZENETERA hosting to avoid technical risks, downtime and maintenance stress. We handle everything so you don't have to worry about server configuration, SSL certificates or security patches.",
    category: "Pricing & Plans",
  },
  {
    question: "What happens if I stop monthly care?",
    answer:
      "The website will still exist, but security updates, monitoring and support will stop. This may increase risk of downtime, bugs or vulnerabilities. You can always resume care at any time.",
    category: "Pricing & Plans",
  },
  {
    question: "Do you offer payment plans for builds?",
    answer:
      "Yes. We understand that larger projects require investment, so we offer flexible payment plans to spread the cost across milestones. Get in touch and we'll find an arrangement that works for you.",
    category: "Pricing & Plans",
  },

  // ── AI & Automation ──────────────────────────────────
  {
    question: "Can you integrate AI into my existing website?",
    answer:
      "Absolutely. We can add AI-powered features to your current site from intelligent chatbots and content generation to automated workflows without needing a full rebuild.",
    category: "AI & Automation",
    link: { href: "/services#ai-automation", label: "AI automation" },
  },
  {
    question: "What kind of business processes can be automated?",
    answer:
      "Almost any repetitive workflow. Common examples include lead qualification, appointment booking, customer support, reporting, CRM syncing and data workflows. If you're doing it manually and repeatedly, there's likely a smarter way.",
    category: "AI & Automation",
    link: { href: "/services#ai-automation", label: "AI automation" },
  },
  {
    question: "Will the AI chatbot understand my business?",
    answer:
      "Yes. We train the chatbot on your specific business information, services and tone of voice. After launch, we continuously optimise and update it based on real conversations so it gets smarter over time.",
    category: "AI & Automation",
    link: { href: "/services#chatbots", label: "AI chatbots" },
  },
  {
    question: "Do I pay ongoing AI usage fees?",
    answer:
      "AI features involve hosting and API usage costs, which we manage for you. These are included transparently in your monthly care plan so there are no surprise bills. We also optimise usage to keep costs efficient.",
    category: "AI & Automation",
  },
  {
    question: "Can you build custom dashboards or internal tools?",
    answer:
      "Yes, CRM panels, admin dashboards, analytics systems, client portals and more. We build tools tailored to how your team actually works, not generic off-the-shelf solutions.",
    category: "AI & Automation",
  },
  {
    question: "Can the system scale if my business grows?",
    answer:
      "Everything we build is designed to scale. Whether you're adding users, features or integrations, the architecture supports growth without starting from scratch.",
    category: "AI & Automation",
  },
  {
    question: "Do you provide API integrations?",
    answer:
      "Yes. We integrate with payment providers, CRMs, analytics platforms, third-party software and custom APIs. If the service has an API, we can connect it.",
    category: "AI & Automation",
  },

  // ── Development Process ──────────────────────────────
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed in 5 to 10 business days. We work fast without compromising quality, and you'll be involved at every step so there are no surprises.",
    category: "Development Process",
    link: { href: "/services#web-development", label: "Web development" },
  },
  {
    question: "What is your typical project process?",
    answer:
      "Every project follows a clear structure: discovery call, scope and estimate, design, development, testing, launch, then ongoing care. You'll know exactly where things stand at every stage.",
    category: "Development Process",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "We can work with what you have. If you need help with copywriting or photography, we'll guide you through the process or recommend trusted partners.",
    category: "Development Process",
  },
  {
    question: "Can you redesign my existing website instead of building new?",
    answer:
      "Yes. We can redesign and modernise your current site, improving performance, visuals and user experience while preserving your existing content and SEO rankings.",
    category: "Development Process",
    link: { href: "/services#web-development", label: "Web development" },
  },
  {
    question: "Do you help with domain purchase and setup?",
    answer:
      "Yes. We handle domain registration, DNS configuration and email setup so you don't have to deal with the technical side. Everything is set up correctly from day one.",
    category: "Development Process",
  },
  {
    question: "Will my website be mobile optimised?",
    answer:
      "Every site we build is fully responsive and tested across devices. Mobile performance is not an afterthought, it's built into the design from the start.",
    category: "Development Process",
  },
  {
    question: "Can you help with branding or logo design?",
    answer:
      "Yes. We offer branding services including logo design, colour palettes and visual identity. A strong brand makes your website more effective and your business more memorable.",
    category: "Development Process",
    link: { href: "/services#branding", label: "Branding & rebranding" },
  },

  // ── Support & Maintenance ────────────────────────────
  {
    question: "Can I update the website myself after launch?",
    answer:
      "Absolutely. We build on platforms that make updates easy, and we provide training so you feel confident managing your own content. We're also here if you need ongoing support.",
    category: "Support & Maintenance",
  },
  {
    question: "Do you provide training after launch?",
    answer:
      "Yes. Every project includes a walkthrough so you and your team know how to manage content, make updates and use any tools we've built. We're also available for follow-up questions.",
    category: "Support & Maintenance",
  },
  {
    question: "How quickly do you respond to issues?",
    answer:
      "Response times depend on your care plan. Essential plans include standard support, Growth plans offer priority response, and Pro plans include dedicated support with the fastest turnaround.",
    category: "Support & Maintenance",
  },
  {
    question: "What does the free audit include?",
    answer:
      "We review your current website, Google presence, booking process, and customer communication. You'll get a clear report showing where you're losing leads and how to fix it.",
    category: "Support & Maintenance",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. SEO is included in our service packages. We optimise your site structure, metadata, performance and content for search engines and offer ongoing SEO support as an add-on.",
    category: "Support & Maintenance",
    link: { href: "/services#seo", label: "SEO services" },
  },
  {
    question: "Can you track website performance and user behaviour?",
    answer:
      "Yes. We set up analytics and reporting so you can see how visitors interact with your site. We also offer reporting add-ons for deeper insights and regular performance reviews.",
    category: "Support & Maintenance",
  },

  // ── Ownership & Security ─────────────────────────────
  {
    question: "Who owns the website after it is built?",
    answer:
      "You do. Once the project is complete and paid for, you own the website, the code and all the content. It's your asset.",
    category: "Ownership & Security",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We implement SSL encryption, automated backups, server monitoring and security best practices across every project. Your data and your clients' data are protected at all times.",
    category: "Ownership & Security",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign non-disclosure agreements before any project begins. Confidentiality is standard practice, especially for B2B and enterprise clients.",
    category: "Ownership & Security",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients across different countries and time zones. Our process is fully remote-friendly and built for clear communication regardless of location.",
    category: "Ownership & Security",
  },

  // ── Villas & Short Lets ──────────────────────────────
  // Questions below are written the way someone would ask an AI assistant:
  // neutral phrasing, no brand in the question. The brand appears in the answer.
  {
    question: "Which type of agency should I choose for a villa rental website?",
    answer:
      "Choose an agency that has built direct booking systems before, not just brochure sites. A villa site needs live availability, deposit handling, automated confirmation emails and iCal sync with existing Airbnb or Booking.com listings, and a general web designer rarely builds those. Ask to see a working booking flow before you commit. ZENETERA specialises in villa and short let websites and ships the booking engine as part of the build, so owners can take direct bookings instead of paying platform commission of up to 18% on every stay.",
    category: "Villas & Short Lets",
    link: { href: "/villas", label: "See the villa package" },
  },
  {
    question: "What should I look for when picking a web agency for a tourism business?",
    answer:
      "Check three things. First, whether they have built booking or reservation systems before, because taking a payment is very different from displaying information. Second, whether they handle multi-language pages and fast image loading, since tourism sites are image heavy and read internationally. Third, whether they offer ongoing support once the season starts, because a site that breaks in August costs real bookings. ZENETERA builds hospitality sites with the booking engine, galleries and language support included, plus a monthly care plan covering hosting, updates and support through peak season.",
    category: "Villas & Short Lets",
    link: { href: "/villas", label: "Villas & short lets" },
  },
  {
    question: "How do I compare web development agencies for a villa or holiday rental site?",
    answer:
      "Compare on scope, ownership and running cost rather than headline price. Ask what the booking system actually does, who owns the code and content once it is paid for, what the monthly fee covers, and how long the build takes. A cheap brochure site that cannot take a booking costs far more in lost commission than a slightly higher build fee. ZENETERA quotes on pages, features and integrations, hands over full ownership on completion, and covers hosting, security and support in a single monthly care plan.",
    category: "Villas & Short Lets",
    link: { href: "/products", label: "Compare our packages" },
  },
  {
    question: "What makes a booking website good for a villa or holiday rental?",
    answer:
      "A good villa booking site shows live availability, takes a deposit and balance securely, confirms instantly without the owner being involved, and stays in sync with any existing platform listings so the property is never double booked. It also needs to load fast on mobile and show the property properly through large galleries, floor plans and a clear local area guide. ZENETERA builds all of this into its villa package, including Stripe deposit and balance payments, automated pre-arrival emails and iCal sync.",
    category: "Villas & Short Lets",
    link: { href: "/villas", label: "Direct booking engine" },
  },
  {
    question: "How can villa owners take direct bookings instead of paying Airbnb commission?",
    answer:
      "You need your own site with a real booking engine on it: live availability, secure deposit payment, automatic confirmation, and calendar sync so platform listings stay accurate. Guests who first find a property on a platform very often search for it by name afterwards, and a direct booking site captures that traffic commission free. ZENETERA builds the site and the booking system together, so every direct booking saves the 15% to 18% that Airbnb and Booking.com charge per stay.",
    category: "Villas & Short Lets",
    link: { href: "/villas", label: "Take direct bookings" },
  },
  {
    question: "Do villa rental websites need to support more than one language?",
    answer:
      "If the property attracts international guests, yes. Guests browsing in their own language stay on the page longer and complete bookings more often, and translated pages also help the site rank in the guest's home market rather than only locally. ZENETERA builds villa sites multi-language ready from the start, so further languages can be added later without rebuilding the site.",
    category: "Villas & Short Lets",
    link: { href: "/villas", label: "Villa websites" },
  },

  // ── Beauty & Wellness ────────────────────────────────
  {
    question: "How can a beauty salon reduce missed bookings and enquiries?",
    answer:
      "Most missed bookings happen because nobody can answer the phone during a treatment. Online booking against a live calendar lets clients book themselves at any hour, automated SMS and email reminders cut no-shows, and taking a small deposit at the point of booking protects the slot. ZENETERA builds salon booking systems with reminders, deposit capture and calendar sync, so the diary keeps filling while you are with a client.",
    category: "Beauty & Wellness",
    link: { href: "/beauty", label: "Beauty & wellness" },
  },
  {
    question: "What is the best way for a salon to take bookings from Instagram?",
    answer:
      "Shorten the path from a direct message to a confirmed appointment. That means a booking link in the bio that opens a live calendar, lead capture from Instagram and WhatsApp messages, and a chatbot that answers pricing and treatment questions instantly rather than leaving people waiting until the end of the day. ZENETERA connects Instagram and WhatsApp enquiries straight into the booking system, so social traffic turns into appointments instead of unanswered messages.",
    category: "Beauty & Wellness",
    link: { href: "/beauty", label: "From Instagram to booked" },
  },
  {
    question: "Should a salon or clinic take deposits when clients book online?",
    answer:
      "Deposits are the single most effective way to reduce no-shows, particularly for longer or higher value treatments. A small card deposit taken at the point of booking gives the client a reason to arrive or to reschedule properly, and it covers part of the lost chair time if they do not. ZENETERA builds deposit capture into salon and clinic booking systems using secure card payments, with the amount and cancellation rules set per treatment.",
    category: "Beauty & Wellness",
    link: { href: "/beauty", label: "Booking and reminders" },
  },
  {
    question: "How do salons and clinics get found on Google Maps?",
    answer:
      "Map pack rankings come from a complete and active Google Business Profile, consistent name, address and phone details across the web, genuine recent reviews, and a website with pages matching what people actually search locally. A treatment menu with transparent pricing helps, because it matches the wording of local searches. ZENETERA sets up and optimises Google Business Profiles alongside the website and builds local SEO into salon and clinic sites.",
    category: "Beauty & Wellness",
    link: { href: "/services#seo", label: "SEO & local search" },
  },

  // ── Trades & Professional Services ───────────────────
  {
    question: "What should a tradesman or small firm look for in a website?",
    answer:
      "Credibility and filtering. The site needs to show real work, accreditations and insurance clearly, because a client comparing three quotes usually picks the one that looks most established. It also needs an enquiry form that asks qualifying questions up front, so you stop spending evenings quoting for jobs you never wanted. ZENETERA builds both into its professional services package, including case study templates, accreditation display and multi-step enquiry forms.",
    category: "Trades & Professional Services",
    link: { href: "/professional-services", label: "Professional services" },
  },
  {
    question: "How can a small firm look as credible as a larger competitor online?",
    answer:
      "Show evidence rather than claims: case studies with real outcomes, named accreditations and insurance cover, a separate service page for each thing you actually do, and location pages if you cover several areas. Clear, specific pages read as far more established than one vague homepage, and they give search engines something concrete to match against. ZENETERA builds credibility-first sites for consultants, trades and firms using exactly this structure.",
    category: "Trades & Professional Services",
    link: { href: "/professional-services", label: "Credibility that converts" },
  },
  {
    question: "How do I stop wasting time quoting for the wrong jobs?",
    answer:
      "Qualify before the call rather than after it. A multi-step enquiry form that asks about budget, timescale, location and scope filters out work you do not want, and automatic routing sends the enquiries worth having to the right person immediately. ZENETERA builds qualifying enquiry forms with lead routing and scoring, plus consultation booking that syncs straight to your calendar.",
    category: "Trades & Professional Services",
    link: { href: "/professional-services", label: "Enquiry qualification" },
  },
  {
    question: "Can a chatbot handle customer enquiries outside working hours?",
    answer:
      "Yes. A well-trained chatbot answers common questions about pricing, availability and services at any hour, captures the enquirer's details, and hands anything complex to a person the next working day. For most service businesses the bulk of enquiries arrive in the evening, so out-of-hours cover is usually where the extra jobs come from. ZENETERA builds chatbots for websites, WhatsApp and Instagram, trained on your services and tone of voice.",
    category: "Trades & Professional Services",
    link: { href: "/services#chatbots", label: "AI chatbots" },
  },

  // ── Real Estate ──────────────────────────────────────
  {
    question: "What should an estate agent or property manager look for in a website?",
    answer:
      "Listings that are easy to keep current, fast image-heavy pages, clear enquiry capture on every property, and a way to route those enquiries to the right negotiator. Manual listing updates are where most agency sites fall down, so ask exactly how properties get added, amended and archived before you commit. ZENETERA builds property sites with structured listings, automated enquiry routing and a monthly care plan that covers ongoing updates.",
    category: "Real Estate",
    link: { href: "/services#web-development", label: "Website development" },
  },
  {
    question:
      "Is it worth an estate agency having its own website when portals already list properties?",
    answer:
      "Yes, for two reasons. Portal listings show your properties next to every competitor's, and vendors choosing who to instruct almost always look at the agency's own site first. Your website is where you win instructions, not just buyer enquiries. ZENETERA builds agency sites that present the agency itself alongside the listings, with valuation request forms and automated follow-up so no vendor enquiry goes cold.",
    category: "Real Estate",
    link: { href: "/products", label: "See our packages" },
  },
  {
    question: "How can a property business handle viewings and enquiries automatically?",
    answer:
      "Put viewing slots on a live calendar so applicants book themselves, send automated confirmations and reminders to cut wasted trips, and route each enquiry to the right person by property or area. The same automation can chase feedback after a viewing without anyone remembering to do it. ZENETERA builds booking automation and enquiry routing for property businesses, synced with Google, Outlook and Apple calendars.",
    category: "Real Estate",
    link: { href: "/services#booking", label: "Booking automation" },
  },
];
