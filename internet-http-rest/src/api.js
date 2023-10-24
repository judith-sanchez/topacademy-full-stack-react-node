const URL = 'http://localhost:3000/tasks';

async function getAllTasks() {
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error('Failed to fetch tasks');
		}
		return response.json();
	} catch (error) {
		console.error('Error fetching tasks:', error);
		throw error;
	}
}
