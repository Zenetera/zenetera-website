import type { SchemaTypeDefinition } from "sanity";

import { blogPost } from "./blogPost";
import { paragraphBlock } from "./blocks/paragraph";
import { headingBlock } from "./blocks/heading";
import { listBlock } from "./blocks/list";
import { calloutBlock } from "./blocks/callout";
import { statBlock } from "./blocks/stat";
import { quoteBlock } from "./blocks/quote";
import { tableBlock, tableRow } from "./blocks/table";
import { dividerBlock } from "./blocks/divider";

export const schemaTypes: SchemaTypeDefinition[] = [
  blogPost,
  paragraphBlock,
  headingBlock,
  listBlock,
  calloutBlock,
  statBlock,
  quoteBlock,
  tableBlock,
  tableRow,
  dividerBlock,
];
