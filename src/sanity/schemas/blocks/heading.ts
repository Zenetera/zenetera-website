import { defineType } from "sanity";

export const headingBlock = defineType({
  name: "headingBlock",
  title: "Heading",
  type: "object",
  fields: [
    {
      name: "level",
      title: "Level",
      type: "number",
      options: {
        list: [
          { title: "H2", value: 2 },
          { title: "H3", value: 3 },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { text: "text", level: "level" },
    prepare: ({ text, level }) => ({
      title: `H${level}: ${text}`,
    }),
  },
});
