import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PricingHero from "@/components/sections/PricingHero";
import PricingPackages from "@/components/sections/PricingPackages";
import PricingCompare from "@/components/sections/PricingCompare";
import PricingCare from "@/components/sections/PricingCare";

// Unlinked from navigation and search: kept reachable by direct URL for sales
// conversations only.
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Pricing",
    description:
      "Transparent pricing for web design, development, automation, and AI solutions tailored to your business.",
    path: "/pricing",
  }),
  robots: { index: false, follow: false },
};

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
