class DietaryPlan {
	constructor() {
		this.days = 365;
		this.mealsPerDay = 3;
		this.mainDishes = [
			{name: 'Beef', percentage: 30},
			{name: 'Chicken', percentage: 30},
			{name: 'Fish', percentage: 25},
			{name: 'Sausages', percentage: 10},
			{name: 'Skip', percentage: 5},
		];
		this.sideDishes = [
			{name: 'Rice', percentage: 20},
			{name: 'Noodles', percentage: 15},
			{name: 'Vegetables', percentage: 45},
			{name: 'Potatoes', percentage: 10},
			{name: 'Skip', percentage: 10},
		];
		this.beverages = [
			{name: 'Tea', percentage: 35},
			{name: 'Coffee', percentage: 35},
			{name: 'Milk', percentage: 15},
			{name: 'Coke', percentage: 10},
			{name: 'Skip', percentage: 5},
		];

		this.sauces = [
			{name: 'Mayo', percentage: 35},
			{name: 'Soy Sauce', percentage: 35},
			{name: 'Mustard', percentage: 15},
			{name: 'Skip', percentage: 5},
		];

		this.forbiddenCombinations = [
			['Skip', 'Skip', 'Skip'],
			['Fish', 'Milk'],
			['Potatoes', 'Soy Sauce'],
		];

		this.dailyPlan = this.generateDietaryPlan();
	}

	generateRandomDish(dishArray) {
		const totalPercentage = dishArray.reduce(
			(total, item) => total + item.percentage,
			0,
		);
		let randomPercentage = Math.random() * totalPercentage;

		for (const dish of dishArray) {
			randomPercentage -= dish.percentage;
			if (randomPercentage <= 0) {
				return dish.name;
			}
		}
	}

	isValidCombination(meal) {
		for (const combination of this.forbiddenCombinations) {
			if (
				combination.every(dish => meal.includes(dish)) ||
				(combination[0] === 'Coke' && meal[0] === 'Coke' && meal[1] === 'Coke')
			) {
				return false;
			}
		}
		return true;
	}

	checkSauces(dayPlan) {
		if (!dayPlan.some(meal => meal.sauce === 'Skip')) {
			dayPlan[Math.floor(Math.random() * 2)].sauce = 'Skip';
		}

		if (dayPlan.every(meal => meal.sauce === 'Skip')) {
			dayPlan[Math.floor(Math.random() * 2)].sauce = 'Soy Sauce';
		}

		for (let i = 0; i < dayPlan.length; i += 1) {
			if (dayPlan[i].sauce === 'Skip' && dayPlan[i + 1].sauce === 'Skip') {
				day
			}
		}
	}

	generateDietaryPlan() {
		const plan = [];

		for (let day = 1; day <= this.days; day++) {
			const dailyMeals = [];

			for (let meal = 1; meal <= this.mealsPerDay; meal++) {
				let mainDish, sideDish, beverage, sauce;

				do {
					mainDish = this.generateRandomDish(this.mainDishes);
					sideDish = this.generateRandomDish(this.sideDishes);
					beverage = this.generateRandomDish(this.beverages);
					sauce = this.generateRandomDish(this.sauces);
				} while (
					!this.isValidCombination([mainDish, sideDish, beverage, sauce])
				);

				dailyMeals.push({
					mainDish,
					sideDish,
					beverage,
					sauce,
				});
			}
			this.checkSauces(dailyMeals);

			plan.push({day, meals: dailyMeals});
		}
		// console.log(JSON.stringify(plan[0]));
		return plan;
	}

	printDietaryPlan() {
		this.dailyPlan.forEach(day => {
			console.log(`Day ${day.day}:`);
			day.meals.forEach((meal, index) => {
				console.log(`Meal ${index + 1}:`);
				console.log(`Main Dish: ${meal.mainDish}`);
				console.log(`Side Dish: ${meal.sideDish}`);
				console.log(`Sauce: ${meal.sauce}`);
				console.log(`Beverage: ${meal.beverage}`);
				console.log('---');
			});
			console.log('\n');
		});
	}
}

const dietaryPlan = new DietaryPlan();
dietaryPlan.printDietaryPlan();
