module.exports = {
  plugins: ["simple-import-sort", "import", "turisap"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: "*",
            next: "return",
          },
          {
            blankLine: "always",
            prev: "*",
            next: ["interface", "type"],
          },
          {
            blankLine: "always",
            prev: ["interface", "type"],
            next: "*",
          },
          {
            blankLine: "always",
            prev: "*",
            next: ["if", "switch", "while", "function", "block-like"],
          },
          {
            blankLine: "always",
            prev: ["if", "switch", "while", "function", "block-like"],
            next: "*",
          },
          {
            blankLine: "always",
            prev: "multiline-expression",
            next: "*",
          },
          {
            blankLine: "always",
            next: "multiline-expression",
            prev: "*",
          },
          {
            blankLine: "always",
            next: "break",
            prev: "*",
          },
          {
            blankLine: "always",
            next: "throw",
            prev: "*",
          },
        ],
        "@typescript-eslint/space-before-blocks": ["error"],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "explicit",
            overrides: {
              constructors: "off",
              accessors: "off",
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: false,
          },
        ],
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/unbound-method": "warn",
        "no-async-promise-executor": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/ban-types": "warn",
        "no-prototype-builtins": "warn",
        "no-constant-condition": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            filter: {
              regex: "^__*__$",
              match: true,
            },
            format: ["camelCase", "UPPER_CASE"],
          },
          {
            selector: "property",
            modifiers: ["private", "public", "protected", "static", "readonly"],
            format: ["UPPER_CASE", "camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            selector: "method",
            format: ["camelCase"],
          },
          {
            selector: "enum",
            format: ["UPPER_CASE", "PascalCase"],
          },
        ],
      },
    },
  ],
  rules: {
    curly: "error",
    eqeqeq: "error",
    "import/first": "warn",
    "import/order": "off",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "no-console": ["off"],
    "no-magic-numbers": "off",
    "require-await": "off",
    "simple-import-sort/exports": "warn",
    "space-before-blocks": "off",
    "padding-line-between-statements": "off",

    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"], // bare imports
          ["^react"], // react
          ["^[^\\.]"], // non-local imports
          [
            "^constants|^config|^lib|^utils|^types.ts|^store|^api|^app|^pages|^components|^styles|^assets",
          ], // internal
          ["^\\."], // local imports
        ],
      },
    ],
    "turisap/no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreArrayIndexes: true,
        ignoreReadonlyClassProperties: true,
        allowRGBa: true,
        allowedCalls: ["setTimeout"],
      },
    ],
  },
};
