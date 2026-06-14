// @ts-check

// ESLint is the REFACTOR tool in the BDD cycle.
// After all scenarios are green, run: npm run lint
// It surfaces code smells (unused variables, implicit any, etc.) so you can clean them up
// without changing observable behaviour.
//
// To suppress a specific warning intentionally, use:
//   // eslint-disable-next-line -- <reason why this is intentional>

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
