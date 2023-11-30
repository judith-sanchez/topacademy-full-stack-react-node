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
        var newPizza = __assign(__assign({}, pizza), { id: Math.random().toString(36), 
            // NEED TO CHANGE THE DATE
            availableDate: new Date().toISOString() });
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
// Example usage:
var pepperoniPizza = {
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
};
var veggiePizza = {
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
};
var bbqChickenPizza = {
    name: 'BBQ Chicken Feast',
    size: 'L',
    crust: 'Thick',
    toppings: {
        name: 'BBQ Chicken',
        isHot: true,
        quantity: 220,
        bakingDuration: 'slow',
        price: 12,
    },
};
var hawaiianPizza = {
    name: 'Hawaiian Bliss',
    size: 'S',
    crust: 'Thin',
    toppings: {
        name: 'Ham and Pineapple',
        isHot: false,
        quantity: 150,
        bakingDuration: 'medium',
        price: 7,
    },
};
var meatLoversPizza = {
    name: "Meat Lover's Dream",
    size: 'L',
    crust: 'Thick',
    toppings: {
        name: 'Sausage, Bacon, and Pepperoni',
        isHot: true,
        quantity: 300,
        bakingDuration: 'slow',
        price: 15,
    },
};
var orderResponsePepperoni = pizzaApi.createPizza(pepperoniPizza);
// console.log('Order Response Pepperoni:', orderResponsePepperoni);
var orderResponseVeggie = pizzaApi.createPizza(veggiePizza);
// console.log('Order Response Veggie:', orderResponseVeggie);
var orderResponseBBQChicken = pizzaApi.createPizza(bbqChickenPizza);
// console.log('Order Response BBQ Chicken:', orderResponseBBQChicken);
var orderResponseHawaiian = pizzaApi.createPizza(hawaiianPizza);
// console.log('Order Response Hawaiian:', orderResponseHawaiian);
var orderResponseMeatLovers = pizzaApi.createPizza(meatLoversPizza);
// console.log('Order Response Meat Lovers:', orderResponseMeatLovers);
var getAllPizzasResponse = pizzaApi.getAllPizzas();
console.log('All Pizzas Ordered:', getAllPizzasResponse);
// tsc index.ts -> node can't use .ts file, so it need to "translate" the code into js
// node index.js -> node can read the file created on the previous step
