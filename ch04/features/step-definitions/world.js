const { setWorldConstructor, World } = require('@cucumber/cucumber');


class CustomWorld extends World {
    constructor(options) {
        super(options)
        console.log("\nWorld constructor called");
    }
}

setWorldConstructor(CustomWorld);
