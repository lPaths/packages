const prettierConfig = require('@6thpath/prettier-config')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
