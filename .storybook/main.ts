import { Configuration } from "webpack";

module.exports = {
  stories: [
    "../src/**/*.stories.ts",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-toolbars",
    "@storybook/addon-viewport",
  ],
  babel: {
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-class-properties",
      "babel-plugin-remove-graphql-queries",
    ],
  },
  webpackFinal: async (config: Configuration) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.

    const rules = config?.module?.rules?.[0];

    if (rules) {
      rules.exclude = [/node_modules\/(?!(gatsby)\/)/];
    }

    return config;
  },
};
