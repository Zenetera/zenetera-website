import { defineType } from "sanity";

export const quoteBlock = defineType({
  name: "quoteBlock",
  title: "Quote",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    },
    {
      name: "attribution",
      title: "Attribution",
      type: "string",
    },
  ],
  preview: {
    select: { text: "text", attribution: "attribution" },
    prepare: ({ text, attribution }) => ({
      title: "Quote",
      subtitle: attribution ? `— ${attribution}` : text?.slice(0, 80),
    }),
  },
});
