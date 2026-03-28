import { buildMetadata } from "@/lib/metadata";
import PricingHero from "@/components/sections/PricingHero";
import PricingPackages from "@/components/sections/PricingPackages";
import PricingCompare from "@/components/sections/PricingCompare";
import PricingCare from "@/components/sections/PricingCare";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for web design, development, automation, and AI solutions tailored to your business.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPackages />
      <PricingCompare />
      <PricingCare />
    </>
  );
}
