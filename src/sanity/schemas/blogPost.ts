import { defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(300),
    },
    {
      name: "readTime",
      title: "Read time",
      type: "string",
      description: 'e.g. "9 min read"',
      validation: (r) => r.required(),
    },
    {
      name: "updated",
      title: "Updated",
      type: "string",
      description: 'Year or short label, e.g. "2026"',
      validation: (r) => r.required(),
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "blocks",
      title: "Content blocks",
      type: "array",
      of: [
        { type: "paragraphBlock" },
        { type: "headingBlock" },
        { type: "listBlock" },
        { type: "calloutBlock" },
        { type: "statBlock" },
        { type: "quoteBlock" },
        { type: "tableBlock" },
        { type: "dividerBlock" },
      ],
      validation: (r) => r.required().min(1),
    },
  ],
  preview: {
    select: { title: "title", category: "category", featured: "featured" },
    prepare: ({ title, category, featured }) => ({
      title,
      subtitle: `${featured ? "★ " : ""}${category}`,
    }),
  },
});
