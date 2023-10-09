module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript-error'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-duplicate-imports': 'off',
    'import/extensions': ['error', 'always'],
    'jsdoc/tag-lines': ['error', 'any', {
      'startLines': 1,
    }],
    'jsdoc/sort-tags': ['error', { 'linesBetween': 1, "tagSequence": [{ "tags": ["param"] }, { "tags": ["returns"] }] }]
  },
};
