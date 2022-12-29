// This is a hack https://github.com/storybookjs/storybook/issues/11684#issuecomment-67473146

// Want to eventually remove, once react-syntax-highlighter gets their shit together.
declare module "react-syntax-highlighter/dist/cjs/create-element" {
  import React from "react";
  const createElement: React.Component;
}

declare module "gatsby-source-contentful/rich-text" {
  const renderRichText: ReactNode;
}

declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";

// Moved from .storybook/preview after converted to js
declare const window: { ___navigate: (pathname: string) => void };
