// Importing the 'fs' and 'os' modules for file system and operating system operations
const fs = require('fs');
const os = require('os');

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

// Function to create a file with random lines using a writable stream
const createRandomFile = (fileName, lines) => {
	const start = new Date().getTime(); // Recording start time for performance measurement

	// Creating a writable stream for the file
	const fileStream = fs.createWriteStream(fileName);

	// Looping to generate and write random lines to the file
	for (let i = 0; i < lines; i++) {
		fileStream.write(generateRandomString() + '\n'); // Writing a random line with a newline character
	}

	// Ending the stream and handling the 'finish' event
	fileStream.end(() => {
		const end = new Date().getTime(); // Recording end time for performance measurement
		console.log(`Method Loop took ${end - start} milliseconds.`); // Logging the execution time
	});
};

const fileName = 'random_file_method_loop.txt';
const lines = 1000000; // 1 million lines

// Calling the createRandomFile function with specified file name and number of lines
createRandomFile(fileName, lines);
