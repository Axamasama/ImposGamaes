// ESLint flat config for browser HTML/JS with Prettier integration (CommonJS)
const js = require('@eslint/js');
const globals = require('globals');
const pluginHtml = require('eslint-plugin-html');
const pluginPrettier = require('eslint-plugin-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{js,html}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: { ...globals.browser },
    },
    plugins: { html: pluginHtml, prettier: pluginPrettier },
    rules: {
      'prettier/prettier': 'error',
      // Relax defaults for simple browser scripts embedded in HTML
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
