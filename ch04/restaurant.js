
class RestaurantMenu {
    constructor() {
        this.items = [];
    }

    addMenuItem(item) {
        if (this.itemExists(item)) {
            throw new Error('Duplicate Item');
        }
        return this.items.push(item);
    }

    itemExists(item) {
        return this.items.map(item => item.name).indexOf(item.name) >= 0;
    }
}


class RestaurantMenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    name() {
        return this.name;
    }

    description() {
        return this.description;
    }

    price() {
        return this.price;
    }
}

module.exports = { RestaurantMenu, RestaurantMenuItem };
