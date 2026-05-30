import { defineType } from "sanity";

export const calloutBlock = defineType({
  name: "calloutBlock",
  title: "Callout",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { text: "text" },
    prepare: ({ text }) => ({
      title: "Callout",
      subtitle: text?.slice(0, 80),
    }),
  },
});
