const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { BillCalculationHelper } = require('../../restaurant')
const {Builder, By} = require('selenium-webdriver');

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

async function invokeWebpage(expectedValue) {
    let driver = new Builder()
        .forBrowser('chrome')
        .build();

    driver.get('http://localhost:3000/index.html');
    billAmountTextBox = await driver.findElement(By.id('billAmount'));
    taxRateTextBox = await driver.findElement(By.id('taxRate'));
    button = await driver.findElement(By.id('myButton'));

    await billAmountTextBox.sendKeys(initialBillAmount.toString());
    await taxRateTextBox.sendKeys(taxRate.toString());
    await button.click();

    let header1Element = await driver.findElement(By.xpath('//h1'));
    let header1Text = await header1Element.getText();
    console.log(header1Text);

    let matched = header1Text.includes(`Final Bill Amount is: $${expectedValue}`);
    console.log(matched);
    await driver.quit();
}

Then('Final bill amount calulated is {float}', function (expectedValue) {
    calculatedValue = BillCalculationHelper.calculateBillForCustomer(initialBillAmount, taxRate);
    assert.strictEqual(calculatedValue, expectedValue);

    invokeWebpage(expectedValue);
});
