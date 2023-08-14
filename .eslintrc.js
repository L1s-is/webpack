module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
  ],
  rules: {
    quotes: [ "error", "double" ],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "array-bracket-spacing": [ "error", "always" ],
    "react/require-default-props": "off",
    "arrow-parens": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [ ".js", ".jsx", "tsx" ] },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "warn",
    "react/jsx-props-no-spreading": "warn",
    "i18next/no-literal-string": [ "error", { markupOnly: true, ignoreAttribute: [ "data-testid" ] } ],
    "max-len": [ "error", { ignoreComments: true, code: 120 } ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: [ "**/src/**/*.test.{ts,tsx}" ],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
