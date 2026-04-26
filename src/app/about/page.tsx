import { buildMetadata } from "@/lib/metadata";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutValues from "@/components/sections/AboutValues";
import AboutApproach from "@/components/sections/AboutApproach";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Zenetera is a UK studio helping small businesses, tradesmen, and professional services launch websites, automation, and AI that turn visitors into customers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutApproach />
      <FinalCTA />
    </>
  );
}
