import { buildMetadata } from "@/lib/metadata";
import BlogIndex from "@/components/sections/BlogIndex";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllPosts } from "@/sanity/queries";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Playbooks, field notes and honest takes on websites, automation, SEO and AI for UK small businesses, from the Zenetera studio.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <BlogIndex posts={posts} />
      <FinalCTA />
    </>
  );
}
