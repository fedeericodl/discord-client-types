// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";

export default tseslint.config({
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    jsdoc.configs["flat/recommended"],
  ],
  files: ["**/*.ts"],
});
