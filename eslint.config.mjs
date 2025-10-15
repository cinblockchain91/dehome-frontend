import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 🧹 Bỏ qua các thư mục không cần lint
  {
    ignores: [
      '.next/',
      'node_modules/',
      'dist/',
      'next-env.d.ts',
      'commitlint.config.js',
      'stylelint.config.js',
    ],
  },

  // ⚙️ Cấu hình chính cho dự án
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      '@next/next': nextPlugin,
      prettier: prettierPlugin,
    },

    // ✅ Kết hợp cấu hình mặc định của ESLint, TypeScript, Prettier, Next
    rules: {
      // --- ESLint recommended ---
      ...js.configs.recommended.rules,

      // --- TypeScript recommended ---
      ...tseslint.configs.recommended.rules,

      // --- Next.js core web vitals ---
      ...nextPlugin.configs['core-web-vitals'].rules,

      // --- Tắt các rule xung đột với Prettier ---
      ...prettierConfig.rules,

      // --- Quy tắc tuỳ chỉnh ---
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',

      // --- Quy tắc format của Prettier ---
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 100,
          bracketSpacing: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
];
