// Importing the 'fs' module for file system operations
const fs = require('fs');

// Function to generate a random string of specified length
const generateRandomString = () => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const length = 10;

	// Generating random string character by character
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
};

// Asynchronous function to create a file with random lines
const createRandomFile = async (fileName, lines) => {
	const start = new Date().getTime(); // Recording start time for performance measurement

	// Looping to generate and append random lines to the file
	for (let i = 0; i < lines; i++) {
		const randomLine = generateRandomString() + '\n'; // Generating a random line with a newline character
		await fs.promises.appendFile(fileName, randomLine); // Asynchronously appending the line to the file
	}

	const end = new Date().getTime(); // Recording end time for performance measurement
	console.log(`Method async/await took ${end - start} milliseconds.`); // Logging the execution time
};

const fileName = 'random_file_method_async.txt';
const lines = 1000000;

// Calling the createRandomFile function with specified file name and number of lines
createRandomFile(fileName, lines);
