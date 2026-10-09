// @ts-check
import { defineConfig } from "oxfmt"

export default defineConfig({
  arrowParens: "avoid",
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 100,
  sortImports: {
    groups: [
      ["builtin", "external"],
      ["internal", "subpath", "parent", "sibling", "index", "style", "unknown"],
    ],
    newlinesBetween: false,
  },
})
