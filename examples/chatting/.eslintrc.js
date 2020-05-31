module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb'
  ],
  plugins: ['react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-void': 'off',
    'no-param-reassign': ["error", { "props": false }],
    'object-curly-newline': [
      'error',
      {
        'ObjectPattern': {
          'multiline': true
        },
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 3
        }
      }
    ],
  },
  'settings': {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    }
  }
};