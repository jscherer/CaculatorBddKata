import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the numbers {int} and {int}', function (this: CustomWorld, a: number, b: number) {
  // this.a = a;
  // this.b = b;
  // Uncomment code above, to turns the Given phrase into concrete actions
  // and remove the line below
  return 'pending';
});

When('I add them', function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the result is {int}', function (this: CustomWorld, expected: number) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
