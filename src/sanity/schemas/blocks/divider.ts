import { defineType } from "sanity";

export const dividerBlock = defineType({
  name: "dividerBlock",
  title: "Divider",
  type: "object",
  fields: [
    {
      name: "note",
      title: "Note (optional)",
      type: "string",
      hidden: true,
    },
  ],
  preview: {
    prepare: () => ({ title: "— Divider —" }),
  },
});
