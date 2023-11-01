const URL = 'http://localhost:3000/tasks';

// HTTP requet handlres

import {getAllTasks} from './api.js';

// async function getAllTasks(url) {
// 	const res = await fetch(url);
// 	const tasks = await res.json();
// 	console.log(tasks);
// 	return tasks;
// }

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

async function toggleTaskStatus(id) {
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

///// Not sure about this one

async function updateTask(id, title, description) {
	const updateURL = `${URL}/${id}`;

	const task = await getTaskById(id);

	if (task) {
		task.title = title;
		task.description = description;

		const response = await fetch(updateURL, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		if (response.ok) {
			console.log(
				`Task with ID ${id} has been updated. New title: ${title}, New description: ${description}.`,
			);
		} else {
			console.error('Failed to update the task.');
		}
	} else {
		console.log(`No task found with ID ${id}.`);
	}
}

//////////////////////////////////////////////

const container = document.querySelector('.tasks');

const renderTasks = async () => {
	const tasks = await getAllTasks(URL);

	tasks.forEach(task => {
		const taskDiv = document.createElement('template');

		taskDiv.classList.add('task');

		const deleteButton = document.createElement('button');
		deleteButton.textContent = '🗑️';
		deleteButton.classList.add('delete');

		deleteButton.addEventListener('click', () => deleteTask(task.id));
		taskDiv.appendChild(deleteButton);

		const h2 = document.createElement('h2');
		h2.textContent = task.title;
		taskDiv.appendChild(h2);

		const description = document.createElement('p');
		description.textContent = task.description;
		taskDiv.appendChild(description);

		const updateButton = document.createElement('button');
		updateButton.textContent = task.done ? '✅' : '✔️';
		updateButton.classList.add('update');

		updateButton.addEventListener('click', () => toggleTaskStatus(task.id));
		taskDiv.appendChild(updateButton);

		container.appendChild(taskDiv);
	});
};

window.addEventListener('DOMContentLoaded', () => renderTasks());

/////////////////////////////////////////////

const form = document.querySelector('form');
const addTaskButton = document.querySelector('button');

form.addEventListener('submit', async event => {
	event.preventDefault();

	const title = form.querySelector('input').value;
	const description = form.querySelector('textarea').value;

	if (title && description) {
		await createTask(title, description);

		form.querySelector('input').value = '';
		form.querySelector('textarea').value = '';

		renderTasks();
	} else {
		alert('Please enter a title and description for the task.');
	}
});
