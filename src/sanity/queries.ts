import { groq } from "next-sanity";

import { sanityClient } from "./client";
import type { BlogPost } from "@/content/blogs";

const postProjection = groq`
  "slug": slug.current,
  title,
  category,
  excerpt,
  readTime,
  updated,
  featured,
  publishedAt,
  blocks[]{
    _type == "paragraphBlock" => { "type": "paragraph", text },
    _type == "headingBlock" => { "type": "heading", level, text },
    _type == "listBlock" => { "type": "list", style, items },
    _type == "calloutBlock" => { "type": "callout", text },
    _type == "statBlock" => { "type": "stat", value, label },
    _type == "quoteBlock" => { "type": "quote", text, attribution },
    _type == "tableBlock" => {
      "type": "table",
      headers,
      "rows": rows[].cells
    },
    _type == "dividerBlock" => { "type": "divider" }
  }
`;

const allPostsQuery = groq`*[_type == "blogPost"] | order(coalesce(publishedAt, _createdAt) desc) { ${postProjection} }`;

const postBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] { ${postProjection} }`;

const allSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)][].slug.current`;

export async function getAllPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(allPostsQuery, {}, { next: { revalidate: 60 } });
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return sanityClient.fetch(
    postBySlugQuery,
    { slug },
    { next: { revalidate: 60 } },
  );
}

export async function getAllSlugs(): Promise<string[]> {
  return sanityClient.fetch(allSlugsQuery);
}
