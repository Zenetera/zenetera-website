import { buildMetadata } from "@/lib/metadata";
import ServicesDetail from "@/components/sections/ServicesDetail";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, e-commerce, AI chatbots, booking automation, branding, SEO, and more. Everything your business needs to grow online.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesDetail />
    </>
  );
}
