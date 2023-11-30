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
const pepperoniPizza: CreatePizza = {
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

const veggiePizza: CreatePizza = {
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

const bbqChickenPizza: CreatePizza = {
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

const hawaiianPizza: CreatePizza = {
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

const meatLoversPizza: CreatePizza = {
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

const orderResponsePepperoni = pizzaApi.createPizza(pepperoniPizza);
// console.log('Order Response Pepperoni:', orderResponsePepperoni);

const orderResponseVeggie = pizzaApi.createPizza(veggiePizza);
// console.log('Order Response Veggie:', orderResponseVeggie);

const orderResponseBBQChicken = pizzaApi.createPizza(bbqChickenPizza);
// console.log('Order Response BBQ Chicken:', orderResponseBBQChicken);

const orderResponseHawaiian = pizzaApi.createPizza(hawaiianPizza);
// console.log('Order Response Hawaiian:', orderResponseHawaiian);

const orderResponseMeatLovers = pizzaApi.createPizza(meatLoversPizza);
// console.log('Order Response Meat Lovers:', orderResponseMeatLovers);

const getAllPizzasResponse = pizzaApi.getAllPizzas();
console.log('All Pizzas Ordered:', getAllPizzasResponse);

// tsc index.ts -> node can't use .ts file, so it need to "translate" the code into js
// node index.js -> node can read the file created on the previous step
