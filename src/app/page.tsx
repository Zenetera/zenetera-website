import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = buildMetadata({
  title: "Zenetera | Grow Your Business and Never Miss a Lead",
  description:
    "We help small businesses, freelancers, and entrepreneurs get more customers through websites, automation, and smarter online presence.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
