import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { color } from "../../../styles/color";
import { spacerSizeEm } from "../../../styles";
import ExternalLink from "../../navigation/ExternalLink";

const MarkdownTableTable = styled.table`
  border: solid 1px ${color.gray74};
  border-spacing: 0px;
`;

const MarkdownTableTh = styled.th`
  padding: ${spacerSizeEm.sm};
  border: solid 1px ${color.gray74};
`;

const MarkdownTableTd = styled.td`
  padding: ${spacerSizeEm.sm};
  border: solid 1px ${color.gray74};
`;
type MarkdownLinkProps = {
  children: ReactNode;
  href: string;
};

const MarkdownLink = ({ children, href }: MarkdownLinkProps) => {
  return (
    <ExternalLink href={href} newTab color="interactive">
      {children}
    </ExternalLink>
  );
};

type MarkdownTableProps = {
  children: string;
};
const MarkdownTable = ({ children }: MarkdownTableProps) => {
  return (
    <MDXProvider
      components={{
        a: MarkdownLink,
        table: MarkdownTableTable,
        th: MarkdownTableTh,
        td: MarkdownTableTd,
      }}
    >
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MarkdownTable;
