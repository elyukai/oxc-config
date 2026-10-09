// @ts-check
import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["import", "jsdoc"],
  options: {
    typeAware: true,
  },
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  ignorePatterns: ["lib/*", "scripts/*", "*.config.{js,mjs,ts,mts}"],
  rules: {
    // require-atomic-updates

    // Nursery
    "no-useless-assignment": "error",

    // Pedantic
    "accessor-pairs": "error",
    eqeqeq: "error",
    "no-array-constructor": "error",
    "no-case-declarations": "error",
    "no-fallthrough": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    "no-prototype-builtins": "error",
    "no-self-compare": "error",
    "no-useless-return": "error",
    "no-warning-comments": "error",
    radix: "error",
    "require-unicode-regexp": "error",
    "symbol-description": "error",

    // Perf
    "no-accumulating-spread": "error",
    "no-await-in-loop": "error",
    "no-map-spread": "error",
    "no-useless-call": "error",
    "prefer-array-find": "error",
    "prefer-array-flat-map": "error",
    "prefer-set-has": "error",

    // Restriction
    "class-methods-use-this": "warn",
    "default-case": "error",
    "no-alert": "error",
    "no-empty": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-regex-spaces": "error",
    "no-var": "error",
    "no-void": "error",

    // Style
    "arrow-body-style": "error",
    "guard-for-in": "error",
    "init-declarations": "error",
    "no-implicit-coercion": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-shadow": ["error", { ignoreTypeValueShadow: true }],
    "no-useless-computed-key": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    yoda: "error",

    // Suspicious
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-new": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "preserve-caught-error": "error",

    // Import
    "import/consistent-type-specifier-style": ["error", "prefer-top-level-if-only-type-imports"],
    "import/no-duplicates": ["error", { preferInline: true }],

    // Unicorn
    "unicorn/prefer-node-protocol": ["error"],

    // JSDoc rules
    "jsdoc/check-access": "error",
    "jsdoc/check-property-names": "error",
    "jsdoc/check-tag-names": [
      "error",
      {
        definedTags: ["main", "integer", "minItems"],
      },
    ],
    "jsdoc/empty-tags": "error",
    "jsdoc/implements-on-classes": "error",
    "jsdoc/no-defaults": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-property": "error",
    "jsdoc/require-property-description": "error",
    "jsdoc/require-property-name": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-throws-type": "error",
    "jsdoc/require-yields": "error",
    "jsdoc/require-yields-type": "error",
    //      - jsdoc/check-alignment
    //      - jsdoc/check-param-names
    //      - jsdoc/check-types
    //      - jsdoc/check-values
    //      - jsdoc/escape-inline-tags
    //      - jsdoc/multiline-blocks
    //      - jsdoc/no-multi-asterisks
    //      - jsdoc/no-types
    //      - jsdoc/reject-any-type
    //      - jsdoc/reject-function-type
    //      - jsdoc/require-description
    //      - jsdoc/require-jsdoc
    //      - jsdoc/require-next-type
    //      - jsdoc/require-returns-check
    //      - jsdoc/require-yields-check
    //      - jsdoc/tag-lines
    //      - jsdoc/ts-no-empty-object-type
    //      - jsdoc/valid-types

    // TypeScript rules
    "typescript/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 10,
      },
    ],
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-empty-object-type": "error",
    "typescript/no-explicit-any": "error",
    "typescript/no-extra-non-null-assertion": "error",
    "typescript/no-misused-new": "error",
    "typescript/no-namespace": "error",
    "typescript/no-non-null-asserted-optional-chain": "error",
    "typescript/no-require-imports": "error",
    "typescript/no-this-alias": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unsafe-declaration-merging": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-wrapper-object-types": "error",
    "typescript/prefer-as-const": "error",
    "typescript/prefer-namespace-keyword": "error",
    "typescript/triple-slash-reference": "error",
    "typescript/await-thenable": "error",
    "typescript/no-array-delete": "error",
    "typescript/no-base-to-string": "error",
    "typescript/no-confusing-void-expression": "error",
    "typescript/no-deprecated": "error",
    "typescript/no-duplicate-type-constituents": "error",
    "typescript/no-dynamic-delete": "error",
    "typescript/no-extraneous-class": "error",
    "typescript/no-floating-promises": "error",
    "typescript/no-for-in-array": "error",
    "typescript/no-generated-empty-object-type": "error",
    "typescript/no-implied-eval": "error",
    "typescript/no-invalid-void-type": "error",
    "typescript/no-meaningless-void-operator": "error",
    "typescript/no-misused-promises": "error",
    "typescript/no-misused-spread": "error",
    "typescript/no-mixed-enums": "error",
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/no-redundant-type-constituents": "error",
    "typescript/no-unnecessary-boolean-literal-compare": "error",
    "typescript/no-unnecessary-condition": "error",
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unnecessary-type-arguments": "error",
    "typescript/no-unnecessary-type-assertion": "error",
    "typescript/no-unnecessary-type-conversion": "error",
    "typescript/no-unnecessary-type-parameters": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-enum-comparison": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/no-unsafe-unary-minus": "error",
    "typescript/no-useless-default-assignment": "error",
    "typescript/only-throw-error": "error",
    "typescript/prefer-literal-enum-member": "error",
    "typescript/prefer-promise-reject-errors": "error",
    "typescript/prefer-reduce-type-parameter": "error",
    "typescript/prefer-return-this-type": "error",
    "typescript/related-getter-setter-pairs": "error",
    "typescript/require-await": "error",
    "typescript/restrict-plus-operands": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      },
    ],
    "typescript/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false,
      },
    ],
    "typescript/return-await": ["error", "error-handling-correctness-only"],
    "typescript/unbound-method": "error",
    "typescript/unified-signatures": "error",
    "typescript/use-unknown-in-catch-callback-variable": "error",
    "typescript/adjacent-overload-signatures": "error",
    "typescript/array-type": "error",
    "typescript/consistent-type-assertions": "error",
    "typescript/no-inferrable-types": "error",
    "typescript/prefer-for-of": "error",
    "typescript/prefer-readonly": "error",
    "typescript/require-array-sort-compare": "error",
    "typescript/strict-boolean-expressions": "error",
    "typescript/switch-exhaustiveness-check": "error",
    "typescript/consistent-type-exports": "error",
    "typescript/consistent-type-imports": "error",
    // "typescript/no-unsafe-enum-assignment": ???,
    // "typescript/naming-convention": [
    //   "error",
    //   {
    //     selector: "interface",
    //     format: ["PascalCase"],
    //     custom: {
    //       regex: "^I[A-Z]",
    //       match: false,
    //     },
    //   },
    // ],
  },
  overrides: [
    {
      files: ["test/**/*.{js,mjs,cjs,ts,mts,cts}"],
      rules: {
        "typescript/no-floating-promises": "off",
      },
    },
  ],
})
