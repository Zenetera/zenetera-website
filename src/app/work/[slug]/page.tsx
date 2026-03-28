import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/work";

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

  return (
    <section
      style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "var(--space-4xl) var(--space-xl)",
      }}
    >
      <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-sm)" }}>
        {study.client}
      </p>
      <h1 style={{ fontSize: "var(--font-size-3xl)", marginBottom: "var(--space-lg)" }}>
        {study.title}
      </h1>
      <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap", marginBottom: "var(--space-2xl)" }}>
        {study.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "var(--font-size-xs)",
              padding: "var(--space-xs) var(--space-sm)",
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--border-radius-sm)",
              color: "var(--color-text-muted)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          aspectRatio: "16/9",
          backgroundColor: "var(--color-surface)",
          borderRadius: "var(--border-radius-md)",
          marginBottom: "var(--space-2xl)",
        }}
      />
      <p style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}>
        Full case study content coming soon.
      </p>
    </section>
  );
}
