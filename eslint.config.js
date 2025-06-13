import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.extends([
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
  ]),
  ...compat.overrides([
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
        '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
        '@angular-eslint/no-host-metadata-property': 'off',
        'eqeqeq': ['error', 'always'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-const': 'error',
      },
    },
    // {
    //   files: ['*.html'],
    //   extends: ['plugin:@angular-eslint/template/recommended'],
    //   rules: {
    //     '@angular-eslint/template/no-any': 'warn',
    //     '@angular-eslint/template/eqeqeq': 'error',
    //     '@angular-eslint/template/banana-in-box': 'error',
    //   },
    // },
  ]),
];
