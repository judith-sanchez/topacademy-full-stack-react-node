// Task 4
// Create a JS file containing a TasksList class that:

// Contains a list of tasks described by id (number), name (string), priority (number 1-5), and done (boolean)

// Defines a method add for creating tasks with name and priority

// If the priority is missing, the value 1 will be used instead

// The name of the tasks must be unique in the list

// The id for the new task is auto-incremented

// Defines a method remove for deleting a task by id

// Nothing should happen if trying to remove a task that doesn’t exist

// Defines a method getAll for retrieving all the tasks ordered by the last sorting method used (see below)

// Defines a method getById for returning the task with the given id, or undefined if it doesn’t exist

// Defines a method getIf that takes a callback as an argument with the signature of condition(task), which returns a boolean, and returns the subset of tasks matching the provided condition, or an empty array if there are no matches

// Defines a method sortByName for sorting the tasks in place ascending by name

// Defines a method sortByPriority for sorting the tasks in place descending by priority

// Defines a method printAll for logging all the tasks to the console, ordered by the last sorting method used

// Create another JS file and:

// Create an instance of the TasksList

// Call all the methods defined above and play with all the options, for example:

// Add a number of tasks

// Sort the tasks by name

// Retrieve the list of tasks

// Get the details of a specific task

// Remove a task

// Add more tasks and verify that the id is incremented correctly

// Retrieve all the tasks not done that start with the letter A

// Retrieve all the tasks done having more than two words in their name

// Sort the tasks by name

// Log some of the data above to the console

// Use the DevTools to check the values

// Print the tasks list to the console, etc.

// Create other instances of TasksList

// Create an HTML file and load the JS code in the browser.

class Task {
	constructor(name, priority, id) {
		this.name = name;
		//  The nullish coalescing operator (??) is not supported in my JavaScript environment
		// this.priority = priority ?? 1;
		this.priority = priority || 1;
		this.id = id;
		this.done = false;
	}
}

class TasksList {
	constructor() {
		this.tasks = [];
		this.ids = 1;
	}

	add(name, priority) {
		if (priority > 5) {
			priority = 5;
		}

		if (priority < 1) {
			priority = 1;
		}

		const newTask = new Task(name, priority, this.ids);
		this.ids += 1;
		this.tasks.push(newTask);
		// console.log(newTask);
		return newTask;
	}

	delete(id) {
		const index = this.tasks.findIndex(task => task.id === id);

		if (index !== -1) {
			this.tasks.splice(index, 1);
		}
		// console.log(this.tasks);
	}

	getAll() {
		// console.log(this.tasks);
		return this.tasks;
	}

	getById(id) {
		const task = this.tasks[this.tasks.findIndex(task => task.id === id)];
		// console.log(task);
		return task;
	}

	getIf(condition) {
		const matchingTasks = this.tasks.filter(task => condition(task));
		console.log(matchingTasks);
		return matchingTasks;
	}

	sortByName() {
		this.tasks.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		// console.log(this.tasks);
		return this.tasks;
	}

	sortByPriority() {
		this.tasks.sort((a, b) => a.priority - b.priority);
		console.log(this.tasks);
		return this.tasks;
	}

	printAll() {
		console.log(this.tasks);
	}

	updateStatus(id) {
		const index = this.tasks.findIndex(task => task.id === id);
		this.tasks[index].done = !this.tasks[index].done;
		return this.tasks[index];
	}
}

const newTasksList = new TasksList();
console.log(newTasksList.tasks);
newTasksList.add('call mom', 3);
newTasksList.add('text Yoa', -4);
newTasksList.add('Call Renfe');
newTasksList.add('Go to Supermarket', 5);
console.log(newTasksList.tasks);
newTasksList.add('Finish Homework', 5);
newTasksList.add('Call Laury', 2);
newTasksList.add('do laundry');
newTasksList.add('Top up Tigo', 4);
newTasksList.add('buy coffee', 5);
newTasksList.add('add tasks to panda planner', 10);

console.log(newTasksList.tasks);
newTasksList.delete(1);
newTasksList.delete(100);
newTasksList.delete(7);
newTasksList.getById(30);
newTasksList.sortByPriority();
newTasksList.sortByName();

// Conditions
// High priority tasks
newTasksList.getIf(task => task.priority > 3);
// Not done and starting with a
newTasksList.getIf(task => {
	return !task.done && task.name.toLowerCase().startsWith('a');
});
// More than 2 words
newTasksList.updateStatus(10);
newTasksList.getIf(task => {
	return task.done && task.name.split(' ').length > 2;
});
