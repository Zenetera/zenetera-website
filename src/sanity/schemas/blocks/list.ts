import { defineType } from "sanity";

export const listBlock = defineType({
  name: "listBlock",
  title: "List",
  type: "object",
  fields: [
    {
      name: "style",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      validation: (r) => r.required().min(1),
    },
  ],
  preview: {
    select: { style: "style", items: "items" },
    prepare: ({ style, items }) => ({
      title: `${style === "number" ? "Numbered" : "Bullet"} list`,
      subtitle: `${items?.length ?? 0} items`,
    }),
  },
});
