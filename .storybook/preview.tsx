import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import H, { HeadingProps } from "../src/components/content/Heading";
import viewports from "./viewports";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";

// TODO: fix the Docs headings.

const viewport = {
  viewports: Object.keys(viewports).map((name) => ({
    name,
    styles: {
      width: viewports[name].width + "px",
      height: viewports[name].height + "px",
    },
  })),
};

const StorybookGlobalStyle = createGlobalStyle`
  background-color: transparent;
`;

const StorybookStyle = () => (
  <>
    <GlobalStyle />
    <StorybookGlobalStyle />
  </>
);

const WrappedContainer = ({ children, context }) => (
  <DocsContainer context={context}>
    <StorybookStyle />
    {children}
  </DocsContainer>
);

type StorybookHeadingProps = Pick<HeadingProps, "level" | "children">;
const StorybookHeading = ({ level, children }: StorybookHeadingProps) => {
  return (
    <H level={level} size={("h" + level) as HeadingProps["size"]} bottomMargin>
      {children}
    </H>
  );
};

const Heading1 = ({ children }) => (
  <StorybookHeading level={1}>{children}</StorybookHeading>
);

const Heading2 = ({ children }) => (
  <StorybookHeading level={2}>{children}</StorybookHeading>
);

const Heading3 = ({ children }) => (
  <StorybookHeading level={3}>{children}</StorybookHeading>
);

const Heading4 = ({ children }) => (
  <StorybookHeading level={4}>{children}</StorybookHeading>
);

addParameters({
  options: { panelPosition: "bottom" },
  viewport,
  docs: {
    container: WrappedContainer,
    components: {
      h1: Heading1,
      h2: Heading2,
      h3: Heading3,
      h4: Heading4,
      li: null,
      ul: null,
      p: null,
      span: null,
    },
  },
});

addDecorator((story) => (
  <>
    <StorybookStyle />
    {story()}
  </>
));

declare const window: { ___navigate: (pathname: string) => void };

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname: string) => {
  action("NavigateTo:")(pathname);
};
