const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { BillCalculationHelper } = require('../../restaurant')

let initialBillAmount = 0;
let taxRate = 0;


Given('I have a Customer', function () {

});

Given('User enters initial bill amount as {int}', function (amount) {
    initialBillAmount = amount;
});

Given('Sales tax rate is {float} percent', function (rate) {
    taxRate = rate;
});

Then('Final bill amount calulated is {float}', function (expectedValue) {
    calculatedValue = BillCalculationHelper.calculateBillForCustomer(initialBillAmount, taxRate);
    assert.strictEqual(calculatedValue, expectedValue);
});
