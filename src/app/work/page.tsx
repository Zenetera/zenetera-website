import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies and projects from Zenetera ITC — see how we have helped local service businesses grow their online presence.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Hero
        heading="Our Work"
        subheading="A selection of projects we have delivered for local service businesses across the UK."
      />
      <WorkGrid />
    </>
  );
}
