const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
  'airbnb',
  'plugin:@typescript-eslint/recommended',
  'prettier/@typescript-eslint',
  'plugin:prettier/recommended',
  'plugin:react/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 6,
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        'extensions': ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
}
