module.exports = {
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: { es6: true },
  rules: {
    '@next/next/no-img-element': 'off',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'no-unused-vars': 'error',
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/config/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/constants/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/containers/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/hooks/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/libs/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/pages/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/store/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/theme/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/types/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/utils/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@next/next',
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'import',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
