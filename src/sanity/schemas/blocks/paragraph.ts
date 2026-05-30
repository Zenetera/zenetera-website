import { defineType } from "sanity";

export const paragraphBlock = defineType({
  name: "paragraphBlock",
  title: "Paragraph",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { text: "text" },
    prepare: ({ text }) => ({
      title: "Paragraph",
      subtitle: text?.slice(0, 80),
    }),
  },
});
