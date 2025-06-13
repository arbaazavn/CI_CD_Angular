import { FlatCompat } from '@eslint/eslintrc'; // Import FlatCompat to help migrate old ESLint config formats to the new flat config

const compat = new FlatCompat(); // Create an instance of FlatCompat for use in translating configs

export default [
  // Spread in configs from ESLintRC-style 'extends' using FlatCompat
//   ...compat.extends([
//     'eslint:recommended', // Base recommended ESLint rules
//     'plugin:@typescript-eslint/recommended', // Recommended rules for TypeScript
//     'plugin:@angular-eslint/recommended', // Recommended rules for Angular projects
//   ]),
  // Spread in overrides for specific file types
  ...compat.overrides([
    {
      files: ['*.ts'], // Apply these rules to all TypeScript files
      parserOptions: {
        project: ['tsconfig.json'], // Use the project's TypeScript config for type-aware linting
        createDefaultProgram: true, // Allow ESLint to create a default program if needed
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Error on unused vars, but allow unused args starting with '_'
        '@typescript-eslint/explicit-function-return-type': 'off', // Don't require explicit return types on functions
        '@typescript-eslint/no-explicit-any': 'warn', // Warn when 'any' type is used
        '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }], // Require Angular components to end with 'Component'
        '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }], // Require Angular directives to end with 'Directive'
        '@angular-eslint/no-host-metadata-property': 'off', // Allow use of 'host' metadata property in Angular
        'eqeqeq': ['error', 'always'], // Require strict equality (=== and !==)
        'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console usage, but allow 'warn' and 'error'
        'prefer-const': 'error', // Require 'const' for variables that are never reassigned
      },
    },
    // {
    //   files: ['*.html'], // Apply these rules to all HTML files (Angular templates)
    //   extends: ['plugin:@angular-eslint/template/recommended'], // Use recommended Angular template linting rules
    //   rules: {
    //     '@angular-eslint/template/no-any': 'warn', // Warn if 'any' type is used in templates
    //     '@angular-eslint/template/eqeqeq': 'error', // Require strict equality in templates
    //     '@angular-eslint/template/banana-in-box': 'error', // Enforce correct syntax for two-way binding ([()])
    //   },
    // },
  ]),
];
