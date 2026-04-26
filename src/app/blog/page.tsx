import { buildMetadata } from "@/lib/metadata";
import BlogIndex from "@/components/sections/BlogIndex";
import FinalCTA from "@/components/sections/FinalCTA";
import { blogs } from "@/content/blogs";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Playbooks, field notes and honest takes on websites, automation, SEO and AI for UK small businesses, from the Zenetera studio.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <BlogIndex posts={blogs} />
      <FinalCTA />
    </>
  );
}
