# BDD Kata Walking Skeleton

A reusable skeleton for practicing Behavior-Driven Development (BDD) katas with Claude as your AI pairing partner.

Built on **Playwright + TypeScript + Cucumber v10**.

---

## Purpose

This repo gives you a ready-to-run BDD environment and a `CLAUDE.md` file that turns Claude Code into a **BDD coach and pairing partner**. Claude acts as the Navigator — guiding you through the RED → GREEN → REFACTOR cycle — while you are the Driver.

It ships with:
- A **smoke test** that verifies the skeleton is wired correctly
- A **Calculator kata** as a worked example of the full BDD cycle

---

## Getting started

```bash
git clone https://github.com/jscherer/CaculatorBddKata.git
cd CaculatorBddKata
npm install
npm test
```

Expected output:
```
2 scenarios (1 pending, 1 passed)
4 steps (1 pending, 2 skipped, 1 passed)
```

The Calculator kata is intentionally left pending — it is the starting point for the BDD pairing exercise.

---

## Project structure

```
src/
  features/         # Gherkin feature files (one per kata)
  steps/            # Step definitions (thin — logic lives elsewhere)
  support/
    world.ts        # CustomWorld — shared state for all steps
    hooks.ts        # Before/After hooks for Playwright lifecycle
  pages/            # Page objects for UI katas
docs/
  bootstrap-skeleton.md   # Full file templates for a fresh skeleton
  kata-calculator.md      # Guided RED → GREEN → REFACTOR walkthrough
.vscode/
  tasks.json        # VS Code task: run tests in the integrated terminal
eslint.config.mjs   # ESLint config — used in the REFACTOR phase
CLAUDE.md           # Instructions for Claude — BDD coach + pairing partner
```

---

## How to use CLAUDE.md for a new kata

Open this repo in VS Code with [Claude Code](https://github.com/anthropics/claude-code) active.

### 1. Start a domain kata (no browser)

Type this in the Claude chat:

```
bootstrap domain kata: TicTacToe
```

Claude will create the feature file, then ask:

> "Do you want **beginner mode** or **expert mode**?"

- **Beginner mode** — Claude explains each step, shows the diff, asks for your prediction, then runs the test and reflects on the result.
- **Expert mode** — Claude names the file and the change; you type it.

### 2. Start a UI kata (browser-driven)

```
bootstrap ui kata: GoogleSearch
```

Claude will scaffold feature file, step definitions, and a page object incrementally — one step at a time, always starting from RED.

### 3. The Red-Green-Refactor loop

```
RED      → Write one step definition → run npm test → confirm it fails
GREEN    → Write minimal code        → run npm test → confirm it passes
REFACTOR → Clean up                  → run npm test → confirm still green
```

Claude enforces Uncle Bob's Three Laws:
1. No production code without a failing test
2. No more test than is sufficient to fail
3. No more production code than is sufficient to pass

---

## Running tests

| Command | What it does |
|---|---|
| `npm test` | Run all scenarios |
| `npm run test:coverage` | Run all scenarios + print a coverage table |
| `npm run lint` | Check for code smells (run after all scenarios are green) |
| `npm run test:dry` | Dry run — validates feature files without executing |
| `npm test -- --paths src/features/<kata>.feature` | Run a single kata in isolation |

Or use the VS Code task: `Ctrl+Shift+P` → **Tasks: Run Test Task**

---

## Conventions

- **World is the glue.** Steps access shared state via `CustomWorld` — never import Playwright directly in steps.
- **Typed properties for state.** Add kata-specific properties to `CustomWorld` (e.g. `a`, `b`, `result`) instead of a generic dictionary.
- **Domain classes are pure.** No Cucumber or Playwright imports inside domain code.
- **Steps are thin.** Logic lives in the domain class or page object.
- **One feature file per kata.** Each kata is independently runnable.
- **ESLint is the REFACTOR tool.** Run `npm run lint` when all scenarios are green to surface code smells (unused variables, implicit any, etc.).
- **Coverage shows what's exercised.** Run `npm run test:coverage` in REFACTOR to see which domain code lines your BDD scenarios hit.
