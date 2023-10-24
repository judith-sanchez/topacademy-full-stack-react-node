const URL = 'http://localhost:3000/tasks';

const container = document.querySelector('.tasks');

const renderTasks = async () => {
	const res = await fetch(URL);
	const tasks = await res.json();
	console.log(tasks);

	let template = '';

	tasks.forEach(task => {
		template += `
        <div class="task">
            <h2>${task.title}</h2> 
            <p>${task.description}</p>
            <p>${task.done ? 'done' : 'to do'}</p> 

        `;
	});

	container.innerHTML = template;

	return tasks;
};

window.addEventListener('DOMContentLoaded', () => renderTasks());
