import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import BlogPostView from "@/components/sections/BlogPost";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/sanity/queries";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const all = await getAllPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BlogPostView post={post} related={related} />
      <FinalCTA />
    </>
  );
}
