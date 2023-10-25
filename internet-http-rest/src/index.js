const URL = 'http://localhost:3000/tasks';

const container = document.querySelector('.tasks');

const renderTasks = async () => {
	const res = await fetch(URL);
	const tasks = await res.json();
	console.log(tasks);

	tasks.forEach(task => {
		// Create a task div for each task
		const taskDiv = document.createElement('div');
		taskDiv.classList.add('task');

		const h2 = document.createElement('h2');
		h2.textContent = task.title;

		const description = document.createElement('p');
		description.textContent = task.description;

		const status = document.createElement('p');
		status.textContent = task.done ? 'done' : 'to do';

		// Append the elements to the task div
		taskDiv.appendChild(h2);
		taskDiv.appendChild(description);
		taskDiv.appendChild(status);

		// Append the task div to the container
		container.appendChild(taskDiv);
	});
};

window.addEventListener('DOMContentLoaded', () => renderTasks());
