module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 'no-console': 'warn',
    // 'import/first': 'error',
    // 'react/prop-types': 0,
    // 'linebreak-style': ['error', 'unix'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
