const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { RestaurantMenu, RestaurantMenuItem } = require('../../restaurant')

Given('I placed an order for the following items', function (dataTable) {
    const billData = dataTable.rawTable;

    for (let items in billData) {
        for (let item in billData[items]) {
            console.log(billData[items][item]);
        }
    }
});

Given('I placed an order for the following mapped items', function (dataTable) {
    const billData = dataTable.hashes()

    for (let items in billData) {
        console.log(billData[items].ItemName);
        console.log(billData[items].Units);
        console.log(billData[items].UnitPrice);
    }
});

When('I generate the bill', function () {

});

Then('a bill for ${int} should be generated', function (int) {

});