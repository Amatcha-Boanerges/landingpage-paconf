// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended', // ✅ Security plugin enabled
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'security'], // ✅ Added 'security'
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off', // disable globally
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'react/react-in-jsx-scope': 'off', // disable in TS/TSX explicitly
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '.next/', 'public/', 'out/'],
};
