import React from "react";
import { BLOCKS, Block, Document } from "@contentful/rich-text-types";
import AnchorLink from "../../../navigation/AnchorLink";
import NavItem from "../../../navigation/Nav/NavItem";
import { Options } from "@contentful/rich-text-react-renderer";
import { spacerSizeEm } from "../../../../styles/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";
import Nav from "../../../navigation/Nav";
import { getRichTextHeadingSlug } from "../RichTextHeading";

// Note that we intentionaly avoid Contentful reference here, it's UI.
type TableOfContentsProps = {
  richText: { raw: string };
};

const TableOfContentsDiv = styled.div`
  padding-bottom: ${spacerSizeEm.lg};
`;

// Returns a Table of Contents based on h2 headings.  We can add sub-headings lata.
const TableOfContents = ({ richText }: TableOfContentsProps) => {
  const json: Document = JSON.parse(richText.raw as string);
  const headingTypes = [BLOCKS.HEADING_2];
  const headingsRaw = JSON.stringify({
    nodeType: "document",
    content: json.content.filter((item) =>
      headingTypes.includes(item.nodeType)
    ),
  });

  const richTextOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: function h2Render(node, children) {
        const headingSlug = getRichTextHeadingSlug(node as Block);
        return (
          <NavItem>
            <AnchorLink color="primary" anchorSlug={headingSlug}>
              {children}
            </AnchorLink>
          </NavItem>
        );
      },
    },
  };

  return (
    <TableOfContentsDiv>
      <Nav direction="column">
        {renderRichText({ raw: headingsRaw }, richTextOptions)}
      </Nav>
    </TableOfContentsDiv>
  );
};

export default TableOfContents;
