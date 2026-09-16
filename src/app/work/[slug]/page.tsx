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
    title: study.title,
    description: `Case study: ${study.title} — a project delivered for ${study.client}.`,
    path: `/work/${study.slug}`,
  });
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudy study={study} />;
}
