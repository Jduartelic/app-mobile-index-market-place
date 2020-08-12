module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run code:check && npm run branch:check',
  },
};
