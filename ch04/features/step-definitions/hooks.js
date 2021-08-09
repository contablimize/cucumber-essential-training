
const {After, Before, AfterAll, BeforeAll, AfterStep, BeforeStep, Status} = require('@cucumber/cucumber');

Before(function({pickle, gherkinDocument, testCaseStartedId}) {
    console.log('Before called, scenario =', pickle.name);
});

After(function() {
    console.log('\nAfter called, this =', this.constructor.name);
});

BeforeAll(function() {
    console.log('BeforeAll called');
});

AfterAll(function() {
    console.log('\nAfterAll called');
});

BeforeStep({tags: "@SmokeTest"}, function() {
    console.log('\nBeforeStep called, this =', this.constructor.name);
});

AfterStep({tags: "@SmokeTest", timeout: 5000}, function({result}) {
    console.log('\nAfterStep called, result =', result.status);
});
