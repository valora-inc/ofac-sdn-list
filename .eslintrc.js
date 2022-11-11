module.exports = {
  extends: ['@valora/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['tsconfig.json'],
}
