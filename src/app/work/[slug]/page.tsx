import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/work";
import CaseStudy from "@/components/sections/CaseStudy";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};

  return buildMetadata({
    title: `${study.client}: ${study.title}`,
    description: study.summary,
    path: `/work/${study.slug}`,
    image: study.cover?.src,
  });
}

export default function CaseStudyPage({ params }: Props) {
  const index = caseStudies.findIndex((s) => s.slug === params.slug);

  if (index === -1) {
    notFound();
  }

  const study = caseStudies[index];
  const next = caseStudies.length > 1 ? caseStudies[(index + 1) % caseStudies.length] : undefined;

  return <CaseStudy study={study} next={next} />;
}
