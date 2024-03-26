module.exports = {
  extends: ["@eox", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["public/**", "app/**"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
};
