import { defineType } from "sanity";

export const tableRow = defineType({
  name: "tableRow",
  title: "Row",
  type: "object",
  fields: [
    {
      name: "cells",
      title: "Cells",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { cells: "cells" },
    prepare: ({ cells }) => ({
      title: cells?.join(" | ") ?? "Row",
    }),
  },
});

export const tableBlock = defineType({
  name: "tableBlock",
  title: "Table",
  type: "object",
  fields: [
    {
      name: "headers",
      title: "Headers",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    },
    {
      name: "rows",
      title: "Rows",
      type: "array",
      of: [{ type: "tableRow" }],
      validation: (r) => r.required().min(1),
    },
  ],
  preview: {
    select: { headers: "headers", rows: "rows" },
    prepare: ({ headers, rows }) => ({
      title: "Table",
      subtitle: `${headers?.length ?? 0} cols × ${rows?.length ?? 0} rows`,
    }),
  },
});
