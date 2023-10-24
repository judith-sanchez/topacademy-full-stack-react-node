const URL = 'http://localhost:3000/tasks';

const renderTasks = async () => {
	const res = await fetch(URL);
	const tasks = await res.json();
	console.log(tasks);
	return tasks;
};

window.addEventListener('DOMContentLoaded', () => renderTasks());
