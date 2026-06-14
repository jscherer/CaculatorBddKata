import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the numbers {int} and {int}', function (this: CustomWorld, a: number, b: number) {
  this.context['a'] = a;
  this.context['b'] = b;
});

When('I add them', function (this: CustomWorld) {
  this.context['result'] = (this.context['a'] as number) + (this.context['b'] as number);
});

Then('the result is {int}', function (this: CustomWorld, expected: number) {
  if (this.context['result'] !== expected) {
    throw new Error(`Expected: ${expected}, got: ${this.context['result']}`);
  }
});
