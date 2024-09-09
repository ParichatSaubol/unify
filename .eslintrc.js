const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: true,
        customValidators: [],
      },
    ],
  },
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        schema: './schema.graphql',
        operations: 'src/services/modules/**/*.{tsx,gql,ts}',
      },
    },
    {
      files: 'src/**/*.{graphql,gql}',
      extends: 'plugin:@graphql-eslint/operations-recommended',
      rules: {
        '@graphql-eslint/naming-convention': [
          'warn',
          {
            types: 'PascalCase',
            VariableDefinition: 'snake_case',
          },
        ],
      },
    },
    {
      files: 'src/**/*.{ts}',
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
});
