import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
import H from "../src/components/content/Heading";
import viewports from "./viewports";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

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

const StorybookHeading = ({ level, children }) => {
  return (
    <H level={level} size={"h" + level} bottomMargin>
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

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
