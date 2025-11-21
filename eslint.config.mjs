import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/*', '.next/*', '.out/*']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: 'project-overrides',
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
);

