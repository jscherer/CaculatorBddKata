# First BDD Kata: Calculator

A guided walkthrough of one full RED → GREEN → REFACTOR cycle.
Skip this if you already know BDD/TDD.

---

## RED — write the feature file

Create `src/features/calculator.feature`:

```gherkin
Feature: Calculator

  Scenario: Add two numbers
    Given the numbers 2 and 2
    When I add them
    Then the result is 4
```

Run: `npm test`

Expected: **1 undefined** — no step definitions exist yet. This is the red state.

---

## GREEN — fake it

Create `src/steps/calculator.steps.ts` with a hardcoded correct answer:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the numbers {int} and {int}', function (this: CustomWorld, a: number, b: number) {
  this.context['a'] = a;
  this.context['b'] = b;
});

When('I add them', function (this: CustomWorld) {
  this.context['result'] = 4;
});

Then('the result is {int}', function (this: CustomWorld, expected: number) {
  if (this.context['result'] !== expected) {
    throw new Error(`Expected: ${expected}, got: ${this.context['result']}`);
  }
});
```

Run: `npm test` → expect **2 passed**. Green — with a hardcoded fake answer.

This is **"fake it till you make it"**: the simplest possible implementation that passes.

---

## RED again — force generalization

Add a second scenario to `calculator.feature`:

```gherkin
  Scenario: Add different numbers
    Given the numbers 3 and 3
    When I add them
    Then the result is 6
```

Run: `npm test` → expect **1 failed** (`Expected: 6, got: 4`). The fake breaks. Good.

---

## GREEN — generalize

Change only the `When` body:

```diff
- this.context['result'] = 4;
+ this.context['result'] = (this.context['a'] as number) + (this.context['b'] as number);
```

Run: `npm test` → expect **3 passed**. Both scenarios green.

---

## REFACTOR

Look at the steps. Is there a smell? In this kata the code is already minimal.
If nothing smells, skip refactor and move on. Refactor only when you can name the smell.

---

**What you just did:** RED → GREEN (fake it) → RED (new scenario breaks fake) → GREEN (generalize) → REFACTOR check.
This is the full TDD loop. Every kata repeats it.
