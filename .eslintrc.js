module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true, //   node: true,  
      es6: true,
      
    },
    plugins: ["@typescript-eslint", "react"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
    },
    rules: {
      "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-expressions": 2,
      "@typescript-eslint/interface-name-prefix": [
        "error",
        {
          prefixWithI: "always",
          allowUnderscorePrefix: false,
        },
      ],
    },
    overrides: [
      {
        files: ["*.js"],
        rules: {
          "@typescript-eslint/no-var-requires": "off",
          "@typescript-eslint/no-unused-expressions": 0,
        },
      },
      {
        files: ["*.mdx"],
        rules: {
          "@typescript-eslint/no-unused-expressions": 0,
        },
        extends: ["plugin:mdx/recommended", "plugin:mdx/overrides"],
      },
    ],
  };
  