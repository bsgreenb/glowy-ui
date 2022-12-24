import React, { ReactNode } from "react";
import { Block, BLOCKS, Inline, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Img from "gatsby-image";
import Grid, { GridProps } from "../../layout/Grid";
import RichTextRow from "./RichTextRow";
import RichTextHeading from "./RichTextHeading";
import { Options } from "@contentful/rich-text-react-renderer";
import GridItem from "../../layout/Grid/GridItem";

export type RichTextBaseProps = {
  richText: { raw: string; references?: unknown };
  gap?: GridProps["gap"];
  options?: Options;
};

const RichTextBase = ({ richText, gap, options }: RichTextBaseProps) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: function pRender(node, children) {
        if (node.content.length == 0) {
          return null;
        }

        // Check for inline embeds to know whether to start up a grid.
        const hasInlineCard = node.content.find(
          (c) => c.nodeType == INLINES.EMBEDDED_ENTRY
        );

        return (
          <RichTextRow>
            {hasInlineCard ? <Grid gap="md">{children}</Grid> : children}
          </RichTextRow>
        );
      },
      [BLOCKS.HEADING_2]: RichTextHeading,
      [BLOCKS.HEADING_3]: RichTextHeading,
      [BLOCKS.HEADING_4]: RichTextHeading,
      [BLOCKS.EMBEDDED_ASSET]: function assetRender(node) {
        // TODO: want to standardize alts/descriptions/etc
        return (
          <Grid justify="center">
            <GridItem xs={9} sm={7}>
              <Img {...node.data.target} />
            </GridItem>
          </Grid>
        );
      },
    },
  };

  const richTextOptions = options
    ? {
        renderNode: {
          ...defaultOptions["renderNode"],
          ...options["renderNode"],
        },
      }
    : defaultOptions;

  if (richTextOptions && richTextOptions["renderNode"]) {
    richTextOptions["renderNode"][BLOCKS.LIST_ITEM] = function liRender(
      node: Block | Inline
    ) {
      // https://github.com/contentful/rich-text/issues/126#issuecomment-636926522
      const unwrappedChildren = renderRichText(
        { raw: JSON.stringify(node) },
        {
          renderNode: {
            ...richTextOptions["renderNode"],
            [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) =>
              children,
            [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: ReactNode) =>
              children,
          },
        }
      );

      return <li>{unwrappedChildren}</li>;
    };
  }

  return <Grid gap={gap}>{renderRichText(richText, richTextOptions)}</Grid>;
};

export default RichTextBase;
