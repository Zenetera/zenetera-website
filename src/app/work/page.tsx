import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/sections/PageHero";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies and projects from ZENETERA ITC — see how we have helped local service businesses grow their online presence.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        heading="Our Work"
        sub="A selection of projects we have delivered for local service businesses across the UK."
      />
      <WorkGrid />
    </>
  );
}
