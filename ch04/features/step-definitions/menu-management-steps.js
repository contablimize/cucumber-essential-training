const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { RestaurantMenu, RestaurantMenuItem } = require('../../restaurant')

var newMenuItem;
const locationMenu = new RestaurantMenu();
var errorMessage;

// Synchronous
Given(/^I have a menu item with "([^"]+)" and price ([$])*([0-9]+)$/, (name, currencyType, price) => {
    newMenuItem = new RestaurantMenuItem(name, '', price);
    // return 'pending';
    // return 'skipped';

});

// Asynchronous w/callback
When('I add that menu item', (callback) => {
    // let error = new Error('this is an error!');
    let error = null;
    try {
        locationMenu.addMenuItem(newMenuItem);
    }
    catch (ex) {
        errorMessage = ex.message;
    }
    callback(error);
    // callback(error, 'pending');
    // callback(error, 'skipped');
});

// Asynchronous as promise
Then('Menu Item with name {string} should be added', (string) => {
    return new Promise((resolve, reject) => {
        assert.ok(locationMenu.itemExists(newMenuItem));
        resolve();

        // resolve('pending');
        // resolve('skipped');
        // reject('this is the reason');
        // assert.ok(locationMenu.itemExists(new RestaurantMenuItem('test', '', 10)));
    });
});

Then('I should see an error message with value {string}', function (string) {
    assert.strictEqual(string, errorMessage);
  });
