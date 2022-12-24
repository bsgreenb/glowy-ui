import React from "react";
import MarkdownTable from ".";
import mdxTableFixture from "../../../fixtures/mdx-table-fixture";

export default {
  component: MarkdownTable,
  title: "Content/MarkdownTable",
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ width: "50%" }}>{story()}</div>
    ),
  ],
};

export const Default = () => {
  return <MarkdownTable>{mdxTableFixture}</MarkdownTable>;
};
