import { defineType } from "sanity";

export const statBlock = defineType({
  name: "statBlock",
  title: "Stat",
  type: "object",
  fields: [
    {
      name: "value",
      title: "Value",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare: ({ value, label }) => ({
      title: `Stat: ${value}`,
      subtitle: label,
    }),
  },
});
