import { NodeRenderer } from "@contentful/rich-text-react-renderer";
import { Block, BLOCKS, Text } from "@contentful/rich-text-types";
import React from "react";
import H from "../Heading";
import { FontSizeProp } from "../../../styles/typography";
import RichTextRow from "./RichTextRow";

export const getHeadingSlug = (text: string) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const getRichTextHeadingSlug = (heading: Block) => {
  const textNode = heading.content[0] as Text;
  const text = textNode.value;

  return getHeadingSlug(text);
};

const RichTextHeading: NodeRenderer = (node, children) => {
  const nodeTypeLevels = {
    [BLOCKS.HEADING_2]: 2,
    [BLOCKS.HEADING_3]: 3,
    [BLOCKS.HEADING_4]: 4,
  };
  const nodeType = node.nodeType as keyof typeof nodeTypeLevels;

  const headingSlug = getRichTextHeadingSlug(node as Block);

  const size = nodeTypeLevels[nodeType];
  return (
    <RichTextRow>
      <H id={headingSlug} level={size} size={("h" + size) as FontSizeProp}>
        {children}
      </H>
    </RichTextRow>
  );
};

export default RichTextHeading;
