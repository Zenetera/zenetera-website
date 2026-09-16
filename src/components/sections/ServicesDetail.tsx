import type { ReactNode } from "react";
import {
  WebDevIllustration,
  ECommerceIllustration,
  ChatbotDetailIllustration,
  BookingIllustration,
  BrandingIllustration,
  AIAutomationIllustration,
  SEOIllustration,
} from "@/components/illustrations/ServiceDetailIllustrations";
import CtaBlock from "./CtaBlock";
import PageHero from "./PageHero";
import SplitFeature, { type SplitTone } from "./SplitFeature";

interface ServiceEntry {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  illustration: ReactNode;
}

const services: ServiceEntry[] = [
  {
    id: "web-development",
    label: "Web Development",
    title: "Custom websites built to convert",
    description:
      "We design and develop fast, modern websites tailored to your business. Whether it's a landing page, a multi-page site, or a full web application, every pixel is built to turn visitors into customers.",
    features: [
      "Responsive design that looks great on every device",
      "Fast load times optimized for performance",
      "SEO-friendly structure from day one",
      "Custom functionality tailored to your workflow",
      "Ongoing support and maintenance plans",
    ],
    illustration: <WebDevIllustration />,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    title: "Online stores that drive sales",
    description:
      "Launch a professional online store that makes buying effortless. We build e-commerce experiences with seamless checkout flows, inventory management, and payment integration, so you can sell 24/7.",
    features: [
      "Secure payment gateways (Stripe, PayPal, etc.)",
      "Product catalog with filters and search",
      "Automated order tracking and notifications",
      "Mobile-first shopping experience",
      "Analytics dashboard to track sales performance",
    ],
    illustration: <ECommerceIllustration />,
  },
  {
    id: "chatbots",
    label: "Chatbots",
    title: "AI chatbots that capture leads around the clock",
    description:
      "From simple FAQ bots to advanced AI-powered assistants, we build chatbots that handle customer questions, book appointments, and capture leads on your website, WhatsApp, and Instagram while you sleep.",
    features: [
      "Simple rule-based bots for common questions",
      "Advanced AI chatbots with natural conversation",
      "Multi-platform: website, WhatsApp, Instagram DMs",
      "Lead capture with automatic CRM integration",
      "Handoff to human agents when needed",
    ],
    illustration: <ChatbotDetailIllustration />,
  },
  {
    id: "booking",
    label: "Booking Automations",
    title: "Never miss an appointment again",
    description:
      "Automated booking systems that let your customers schedule appointments online, receive reminders, and reduce no-shows by up to 40%. Integrated with your calendar and workflow.",
    features: [
      "Online booking with real-time availability",
      "Automated email and SMS reminders",
      "Calendar sync (Google, Outlook, Apple)",
      "Custom booking forms for your services",
      "No-show reduction with confirmation workflows",
    ],
    illustration: <BookingIllustration />,
  },
  {
    id: "branding",
    label: "Branding / Rebranding",
    title: "A brand identity that stands out",
    description:
      "Whether you're starting fresh or refreshing an existing brand, we craft cohesive visual identities: logos, color systems, typography, and brand guidelines that make your business instantly recognizable.",
    features: [
      "Logo design and brand mark creation",
      "Color palette and typography system",
      "Brand guidelines document",
      "Business card and stationery design",
      "Social media brand kit",
    ],
    illustration: <BrandingIllustration />,
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    title: "Automate repetitive tasks with AI",
    description:
      "Free up your time by automating the busywork. We connect your tools and build intelligent workflows: from auto-responding to emails, to generating reports, to routing leads to the right person.",
    features: [
      "Email and form response automation",
      "Lead scoring and routing workflows",
      "Report generation and data syncing",
      "Custom integrations between your tools",
      "AI-powered content and document processing",
    ],
    illustration: <AIAutomationIllustration />,
  },
  {
    id: "seo",
    label: "SEO",
    title: "Get found first on Google",
    description:
      "Dominate local and organic search results so customers find you before your competitors. We optimize your online presence from technical SEO to content strategy and Google Business Profile.",
    features: [
      "Technical SEO audit and optimization",
      "Google Business Profile setup and management",
      "Local SEO for map pack rankings",
      "Keyword research and content strategy",
      "Monthly performance reporting",
    ],
    illustration: <SEOIllustration />,
  },
];

const tones: SplitTone[] = ["light", "alt", "dark"];

export default function ServicesDetail() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our Services"
        heading="Everything you need to grow"
        flair="grow"
        sub="From websites to AI automation, we build the systems that help your business get more customers and run more smoothly."
      />

      {services.map((service, index) => (
        <SplitFeature
          key={service.id}
          id={service.id}
          index={String(index + 1).padStart(2, "0")}
          label={service.label}
          title={service.title}
          body={service.description}
          bullets={service.features}
          illustration={service.illustration}
          reversed={index % 2 !== 0}
          tone={tones[index % tones.length]}
        />
      ))}

      <CtaBlock
        heading="Ready to get started?"
        flair="started?"
        text="Let's talk about which services are right for your business. No pressure, no jargon, just a conversation."
        primary={{ label: "See Products", href: "/products" }}
      />
    </>
  );
}
