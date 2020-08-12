/*
 * Severity should be one of the following: 0 = off, 1 = warn, 2 = error
 */

module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  rules: {
    'getter-return': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-empty': 2,
    'no-dupe-else-if': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'react/prefer-stateless-function': 0,
    'no-useless-constructor': 0,
  },
};
