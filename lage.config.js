module.exports = {
  pipeline: {
    ['build-tools']: ['^build-tools'],
    build: ['build-tools', '^build'],
    bundle: ['build-tools', 'build'],
    clean: [],
    depcheck: ['build-tools'],
    lint: ['build-tools'],
    prettier: ['build-tools'],
    ['prettier-fix']: ['build-tools'],
    test: ['build-tools', 'lint', 'build'],
  },
  npmClient: "yarn",
};
