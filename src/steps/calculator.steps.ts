import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the numbers {int} and {int}', function (this: CustomWorld, a: number, b: number) {
  this.a = a;
  this.b = b;
});

When('I add them', function (this: CustomWorld) {
  this.result = this.a + this.b;
});

Then('the result is {int}', function (this: CustomWorld, expected: number) {
  if (this.result !== expected) {
    throw new Error(`Expected ${expected} but got ${this.result}`);
  }
});
