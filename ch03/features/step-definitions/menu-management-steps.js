const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { RestaurantMenu, RestaurantMenuItem } = require('../../restaurant')

var newMenuItem;
const locationMenu = new RestaurantMenu();

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
    locationMenu.addMenuItem(newMenuItem);
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
