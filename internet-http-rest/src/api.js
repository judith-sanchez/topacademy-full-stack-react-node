const URL = 'http://localhost:3000/tasks';

export async function getAllTasks(url) {
	const res = await fetch(url);
	const tasks = await res.json();
	console.log(tasks);
	return tasks;
}
// getAllTasks(URL);

// Just to auto-increment the id for the new tasks and not have a global variable floating around :P
async function getHighestTaskId() {
	const tasks = await getAllTasks(URL);
	const highestId = tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0);
	return highestId + 1;
}

async function createTask(title, description) {
	const highestId = await getHighestTaskId();
	const newTask = {
		id: highestId,
		title,
		description,
		done: false,
	};

	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTask),
	});

	if (response.ok) {
		console.log(`Task with ID ${highestId} has been added.`);
	} else {
		console.error('Failed to add the task.');
	}
}

async function getTaskById(id) {
	const tasks = await getAllTasks(URL);
	const task = tasks.find(task => task.id === id);
	if (task) {
		console.log(`The task with id ${id} is ${task.title}, ${task.description}`);
		return task;
	} else {
		console.log(`No task found with id ${id}`);
		return null;
	}
}
// getTaskById(8);

async function deleteTask(id) {
	const deleteURL = `${URL}/${id}`;

	const response = await fetch(deleteURL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		console.log(`Task with ID ${id} was deleted.`);
	} else {
		console.error('Failed to delete the task.');
	}
}

// deleteTask(7);

async function updateTask(id) {
	const task = await getTaskById(id);

	if (task) {
		task.done = !task.done;

		const updateURL = `${URL}/${id}`;
		const response = await fetch(updateURL, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		if (response.ok) {
			console.log(
				`Task with ID ${id} has been updated. It is now marked as ${
					task.done ? 'done' : 'to do'
				}.`,
			);
		} else {
			console.error('Failed to update the task.');
		}
	} else {
		console.log(`No task found with ID ${id}.`);
	}
}

// updateTask(1);
// updateTask(16);
// updateTask(3);

/*

createTask(
	'Write a Love Letter to Your Favorite Pizza',
	'Express your affection for pizza in a heartfelt love letter.',
);

createTask(
	'Create a Rap About Office Supplies',
	'Compose a rap song about staplers, paperclips, and sticky notes.',
);

createTask(
	'Wear Socks on Your Hands for a Day',
	'Experience life with socks on your hands instead of your feet.',
);

createTask(
	'Start a Conversation with a Houseplant',
	'Engage in a deep conversation with your houseplant.',
);

createTask(
	'Try to Lick Your Elbow',
	'Attempt the elusive feat of licking your own elbow.',
);

createTask(
	'Build a Fort with Pillows and Blankets',
	'Construct an epic fort in your living room.',
);

createTask(
	'Walk Backwards for an Entire Day',
	'Navigate through your day while walking in reverse.',
);

createTask(
	'Have a Pajama Day at the Office',
	"Show up to work in your coziest pajamas and act like it's completely normal.",
);
 */
