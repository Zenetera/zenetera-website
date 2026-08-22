import { buildMetadata } from "@/lib/metadata";
import NicheIndex from "@/components/sections/NicheIndex";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Packaged websites and booking systems for villas and short lets, beauty and wellness, and professional services.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <NicheIndex />
    </>
  );
}
