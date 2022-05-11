module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        semicolons: true,
        quoteProps: 'as-needed',
        arrowParens: 'avoid'
      }
    ],
    'react/react-in-jsx-scope': 'off'
  }
};
