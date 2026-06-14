// Import the three Cucumber step keywords — Given, When, Then
import { Given, When, Then } from '@cucumber/cucumber';

// Import CustomWorld — the shared state object available as 'this' inside every step
import { CustomWorld } from '../support/world';

// GIVEN — set up the context
// Store the two numbers so the When and Then steps can use them.
// 1. Assign a to this.a and b to this.b
// 2. Remove the return 'pending' line — a step with no return value is considered passing
Given('the numbers {int} and {int}', function (this: CustomWorld, a: number, b: number) {
  return 'pending';
});

// WHEN — perform the action
// Add the two numbers and store the result.
// 1. Assign this.a + this.b to this.result
// 2. Remove the return 'pending' line
When('I add them', function (this: CustomWorld) {
  return 'pending';
});

// THEN — verify the outcome
// Check that the actual result matches the expected value from the scenario.
// 1. Compare this.result with expected
// 2. Throw an Error if they don't match — Cucumber treats a thrown error as a failure
// 3. Remove the return 'pending' line
Then('the result is {int}', function (this: CustomWorld, expected: number) {
  return 'pending';
});
