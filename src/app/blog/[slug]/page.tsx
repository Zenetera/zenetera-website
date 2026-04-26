import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import BlogPostView from "@/components/sections/BlogPost";
import FinalCTA from "@/components/sections/FinalCTA";
import { blogs, getBlogBySlug } from "@/content/blogs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const related = blogs
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <BlogPostView post={post} related={related} />
      <FinalCTA />
    </>
  );
}
