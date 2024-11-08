const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { calculateTipWithTotal } = require('../../src/tipCalculator');

let amount, tipPercentage, result;

Given('the total amount is {int}', function (inputAmount) {
  amount = inputAmount;
});

When('I set the tip percentage to {int}', function (inputTipPercentage) {
  tipPercentage = inputTipPercentage;
  result = calculateTipWithTotal(amount, tipPercentage);
});

Then('the tip should be {int}', function (expectedTip) {
  assert.strictEqual(result.tip, expectedTip);
});

Then('the total should be {int}', function (expectedTotal) {
  assert.strictEqual(result.total, expectedTotal);
});