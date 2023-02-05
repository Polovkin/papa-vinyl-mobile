const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss')

module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  'endOfLine': 'auto',
  plugins: [prettierPluginTailwindcss],
};
