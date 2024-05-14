module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  importOrder: [
    "^react$",
    "^(?!@/|\\.|test-utils)",
    "^(@/(.*))|(test-utils)",
    "^[./]",
  ],
  importOrderSeparation: true,
  printWidth: 80,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
}
