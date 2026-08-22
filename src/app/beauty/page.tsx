import { buildMetadata } from "@/lib/metadata";
import NicheTemplate from "@/components/sections/NicheTemplate";
import { getNiche } from "@/lib/niches";

const niche = getNiche("beauty")!;

export const metadata = buildMetadata({
  title: niche.label,
  description: niche.heroBody,
  path: `/${niche.slug}`,
});

export default function BeautyPage() {
  return <NicheTemplate slug="beauty" />;
}
