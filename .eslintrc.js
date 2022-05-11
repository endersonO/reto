module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        semicolons: true,
        quoteProps: 'as-needed',
        arrowParens: 'avoid'
      }
    ]
  }
};
