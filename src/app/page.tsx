import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import NicheSplit from "@/components/sections/NicheSplit";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import { HOME_FAQ_CATEGORIES } from "@/content/faqs";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = buildMetadata({
  title: "ZENETERA | Grow Your Business and Never Miss a Lead",
  description:
    "We help small businesses, freelancers, and entrepreneurs get more customers through websites, automation, and smarter online presence.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <NicheSplit />
      <Services />
      <Testimonials />
      <Process />
      <FAQ categories={HOME_FAQ_CATEGORIES} showAllLink />
      <FinalCTA />
    </>
  );
}
