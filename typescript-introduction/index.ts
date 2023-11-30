// *** Task 1 ***
enum BakingDuration { // Data type that consist on a set of names numeric or string values
	fast = 10,
	medium = 20,
	slow = 30,
}

interface CreatePizza {
	// This is like creating a Class
	// On this case, it represents the instructions to making a pizza
	name: string;
	size: 'S' | 'M' | 'L'; // But it has pre defined options, I would get an error if I assign any different value to this property
	crust: 'Thin' | 'Thick';
	toppings: {
		name: string;
		isHot: boolean;
		quantity: number; // grams
		bakingDuration: keyof typeof BakingDuration; // Use the keys of the enum
		price: number;
	};
}

interface Pizza extends CreatePizza {
	// This "Class" abstracts a "preated pizza"
	// And it extend from CreatePizza
	id: string;
	availableDate: string;
}

interface ApiResult {
	success: true;
	data: Pizza[]; // An array with only instances of the Pizza interface
}

interface ApiError {
	success: false;
	error: string;
}

//  ApiResponse is a union type of ApiResult and ApiError
type ApiResponse = ApiResult | ApiError; // It can only return one of these interfaces

// Simulated API
const pizzaApi = {
	pizzas: [] as Pizza[], // This array can only hold instances of the Pizza interface
	// Method of this api, just like get, post, put, etc
	createPizza: (pizza: CreatePizza): ApiResponse => {
		// This method will use the interface CreatePizza with the passed arguments
		const newPizza: Pizza = {
			...pizza,
			id: Math.random().toString(36), // generate a random ID
			availableDate: new Date().toISOString(), // // Serialize date to ISO 8601 st
		};

		pizzaApi.pizzas.push(newPizza);

		return {success: true, data: pizzaApi.pizzas};
	},

	getAllPizzas: (): ApiResponse => {
		if (pizzaApi.pizzas.length === 0) {
			return {success: false, error: 'No pizzas available'};
		}

		return {success: true, data: pizzaApi.pizzas};
	},
};

// Example usage:

// const pepperoniPizza: CreatePizza = {
// 	name: 'Pepperoni Delight',
// 	size: 'L',
// 	crust: 'Thick',
// 	toppings: {
// 		name: 'Pepperoni',
// 		isHot: true,
// 		quantity: 250,
// 		bakingDuration: 'medium',
// 		price: 10,
// 	},
// };

// const veggiePizza: CreatePizza = {
// 	name: 'Veggie Supreme',
// 	size: 'M',
// 	crust: 'Thin',
// 	toppings: {
// 		name: 'Mixed Vegetables',
// 		isHot: false,
// 		quantity: 180,
// 		bakingDuration: 'fast',
// 		price: 9,
// 	},
// };

// const bbqChickenPizza: CreatePizza = {
// 	name: 'BBQ Chicken Feast',
// 	size: 'L',
// 	crust: 'Thick',
// 	toppings: {
// 		name: 'BBQ Chicken',
// 		isHot: true,
// 		quantity: 220,
// 		bakingDuration: 'slow',
// 		price: 12,
// 	},
// };

// const hawaiianPizza: CreatePizza = {
// 	name: 'Hawaiian Bliss',
// 	size: 'S',
// 	crust: 'Thin',
// 	toppings: {
// 		name: 'Ham and Pineapple',
// 		isHot: false,
// 		quantity: 150,
// 		bakingDuration: 'medium',
// 		price: 7,
// 	},
// };

// const meatLoversPizza: CreatePizza = {
// 	name: "Meat Lover's Dream",
// 	size: 'L',
// 	crust: 'Thick',
// 	toppings: {
// 		name: 'Sausage, Bacon, and Pepperoni',
// 		isHot: true,
// 		quantity: 300,
// 		bakingDuration: 'slow',
// 		price: 15,
// 	},
// };

// const orderResponsePepperoni = pizzaApi.createPizza(pepperoniPizza);
// // console.log('Order Response Pepperoni:', orderResponsePepperoni);

// const orderResponseVeggie = pizzaApi.createPizza(veggiePizza);
// // console.log('Order Response Veggie:', orderResponseVeggie);

// const orderResponseBBQChicken = pizzaApi.createPizza(bbqChickenPizza);
// // console.log('Order Response BBQ Chicken:', orderResponseBBQChicken);

// const orderResponseHawaiian = pizzaApi.createPizza(hawaiianPizza);
// // console.log('Order Response Hawaiian:', orderResponseHawaiian);

// const orderResponseMeatLovers = pizzaApi.createPizza(meatLoversPizza);
// // console.log('Order Response Meat Lovers:', orderResponseMeatLovers);

// const getAllPizzasResponse = pizzaApi.getAllPizzas();
// console.log('All Pizzas Ordered:', getAllPizzasResponse);

/////////////////////////////////////////////////////////////

// *** Task 2 ***

// CreatePizza and Pizza interfaces must be uncommented

interface Menu {
	pizzas: Pizza[]; // Property can only hold Pîzza object instances
	addPizza(pizza: CreatePizza): Pizza; // This method accepts as a parameter of the type CreatePizza and returns Pizza
	getPizza(id: string): Pizza | undefined; // Undefined in case there is no pizzas
	getHotPizzas(): Pizza[];
	sortPizzas(
		criterion:
			| 'name'
			| 'size'
			| 'price'
			| 'baking duration'
			| 'date of addition',
		direction?: 'asc' | 'desc',
	): Pizza[];
	getMenu(): Pizza[];
}

const menu: Menu = {
	pizzas: [], // Initialize pizzas array
	addPizza: function (pizza: CreatePizza): Pizza {
		const newPizza: Pizza = {
			...pizza, // pizza created by the method CreatePizza
			id: Math.random().toString(36), // This goes to the property of the interface Piiza
			availableDate: new Date().toISOString(), // This too
		};

		this.pizzas.push(newPizza);
		return newPizza;
	},
	getPizza: function (id: string): Pizza | undefined {
		return this.pizzas.find(pizza => pizza.id === id);
	},
	getHotPizzas: function (): Pizza[] {
		return this.pizzas.filter(pizza => pizza.toppings.isHot);
	},
	sortPizzas: function (
		criterion:
			| 'name'
			| 'size'
			| 'price'
			| 'baking duration'
			| 'date of addition',
		direction: 'asc' | 'desc' = 'asc',
	): Pizza[] {
		const sortedPizzas = [...this.pizzas].sort((a, b) => {
			if (direction === 'asc') {
				return a[criterion] > b[criterion] ? 1 : -1;
			} else {
				return a[criterion] < b[criterion] ? 1 : -1;
			}
		});

		return sortedPizzas;
	},
	getMenu: function (): Pizza[] {
		return this.pizzas;
	},
};

// Test adding pizzas
const pepperoniPizza = menu.addPizza({
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

const veggiePizza = menu.addPizza({
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
const retrievedPizza = menu.getPizza(pepperoniPizza.id);
console.log('Retrieved Pizza:', retrievedPizza);

// Test getting hot pizzas
const hotPizzas = menu.getHotPizzas();
console.log('Hot Pizzas:', hotPizzas);

// Test sorting pizzas by name in descending order
const sortedPizzas = menu.sortPizzas('name', 'desc');
console.log('Sorted Pizzas:', sortedPizzas);

// Test getting the menu
const fullMenu = menu.getMenu();
console.log('Full Menu:', fullMenu);

// tsc index.ts -> node can't use .ts file, so it need to "translate" the code into js
// node index.js -> node can read the file created on the previous step
