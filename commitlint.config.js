/* eslint-disable turisap/no-magic-numbers */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "ci",
        "test",
        "task",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
      ],
    ],
    "body-case": [2, "always"],
  },
};
/* eslint-enable turisap/no-magic-numbers */
