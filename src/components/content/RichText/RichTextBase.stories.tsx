import React from "react";
import GridItem from "../../layout/Grid/GridItem";
import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import ExternalLink from "../../navigation/ExternalLink";
import postFixture from "../../../fixtures/post-fixture";
import RichTextBase from "./RichTextBase";
import TableOfContents from "./TableOfContents";

export default {
  title: "Content/RichText",
  component: RichTextBase,
  subcomponents: { TableOfContents },
};

export const RichText = () => {
  const options: Options = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: function embedRender(node) {
        const embed = node.data.target;
        // TODO: would like to not use hardcode here.
        if (embed.__typename === "ContentfulProductCard") {
          return (
            <GridItem xs={12} md={6} lg={4}>
              {JSON.stringify(embed)}
            </GridItem>
          );
        }
      },
      [INLINES.HYPERLINK]: function aRender(node, children) {
        return (
          <ExternalLink href={node.data.uri} newTab color="interactive">
            {children}
          </ExternalLink>
        );
      },
    },
  };

  return <RichTextBase richText={postFixture.body} options={options} />;
};

export const RichTextWithToc = () => {
  return (
    <>
      <TableOfContents richText={postFixture.body} />
      <RichText />
    </>
  );
};
