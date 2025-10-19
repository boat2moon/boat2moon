/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  endOfLine: "lf",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-classnames"],
};

export default config;
