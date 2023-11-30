var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// *** Task 1 ***
var BakingDuration;
(function (BakingDuration) {
    BakingDuration[BakingDuration["fast"] = 10] = "fast";
    BakingDuration[BakingDuration["medium"] = 20] = "medium";
    BakingDuration[BakingDuration["slow"] = 30] = "slow";
})(BakingDuration || (BakingDuration = {}));
// Simulated API
var pizzaApi = {
    pizzas: [], // This array can only hold instances of the Pizza interface
    // Method of this api, just like get, post, put, etc
    createPizza: function (pizza) {
        // This method will use the interface CreatePizza with the passed arguments
        var newPizza = __assign(__assign({}, pizza), { id: Math.random().toString(36), availableDate: new Date().toISOString() });
        pizzaApi.pizzas.push(newPizza);
        return { success: true, data: pizzaApi.pizzas };
    },
    getAllPizzas: function () {
        if (pizzaApi.pizzas.length === 0) {
            return { success: false, error: 'No pizzas available' };
        }
        return { success: true, data: pizzaApi.pizzas };
    },
};
var menu = {
    pizzas: [], // Initialize pizzas array
    addPizza: function (pizza) {
        var newPizza = __assign(__assign({}, pizza), { id: Math.random().toString(36), availableDate: new Date().toISOString() });
        this.pizzas.push(newPizza);
        return newPizza;
    },
    getPizza: function (id) {
        return this.pizzas.find(function (pizza) { return pizza.id === id; });
    },
    getHotPizzas: function () {
        return this.pizzas.filter(function (pizza) { return pizza.toppings.isHot; });
    },
    sortPizzas: function (criterion, direction) {
        if (direction === void 0) { direction = 'asc'; }
        var sortedPizzas = __spreadArray([], this.pizzas, true).sort(function (a, b) {
            if (direction === 'asc') {
                return a[criterion] > b[criterion] ? 1 : -1;
            }
            else {
                return a[criterion] < b[criterion] ? 1 : -1;
            }
        });
        return sortedPizzas;
    },
    getMenu: function () {
        return this.pizzas;
    },
};
// Test adding pizzas
var pepperoniPizza = menu.addPizza({
    name: 'Pepperoni Delight',
    size: 'L',
    crust: 'Thick',
    toppings: {
        name: 'Pepperoni',
        isHot: true,
        quantity: 250,
        bakingDuration: 'medium',
        price: 10,
    },
});
var veggiePizza = menu.addPizza({
    name: 'Veggie Supreme',
    size: 'M',
    crust: 'Thin',
    toppings: {
        name: 'Mixed Vegetables',
        isHot: false,
        quantity: 180,
        bakingDuration: 'fast',
        price: 9,
    },
});
// Test getting a pizza by ID
var retrievedPizza = menu.getPizza(pepperoniPizza.id);
console.log('Retrieved Pizza:', retrievedPizza);
// Test getting hot pizzas
var hotPizzas = menu.getHotPizzas();
console.log('Hot Pizzas:', hotPizzas);
// Test sorting pizzas by name in descending order
var sortedPizzas = menu.sortPizzas('name', 'desc');
console.log('Sorted Pizzas:', sortedPizzas);
// Test getting the menu
var fullMenu = menu.getMenu();
console.log('Full Menu:', fullMenu);
// tsc index.ts -> node can't use .ts file, so it need to "translate" the code into js
// node index.js -> node can read the file created on the previous step
