const { prettierConfig } = require('poetic');

module.exports = {
  ...prettierConfig,
  // Add custom rules here
  jsxBracketSameLine: false,
  bracketSpacing: true,
  semi: true,
};
