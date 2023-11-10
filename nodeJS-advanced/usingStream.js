const fs = require('fs');
const os = require('os');
const {Readable} = require('stream');

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

// Function to create a file with random lines using streams
const createRandomFile = (fileName, lines) => {
	const start = new Date().getTime(); // Recording start time for performance measurement

	// Creating a writable stream to the specified file
	const writeStream = fs.createWriteStream(fileName);

	// Creating a readable stream from an iterable generator function
	const readableStream = Readable.from({
		*[Symbol.iterator]() {
			for (let i = 0; i < lines; i++) {
				yield generateRandomString() + '\n'; // Yielding random lines with newline characters
			}
		},
		objectMode: true, // Specifying that the stream will be in object mode
		highWaterMark: 1024 * 1024, // Adjusting the buffer size as needed
	});

	// Piping the readable stream to the writable stream
	readableStream.pipe(writeStream);

	// Handling the 'finish' event of the writable stream
	writeStream.on('finish', () => {
		const end = new Date().getTime(); // Recording end time for performance measurement
		console.log(`Method Stream took ${end - start} milliseconds.`); // Logging the execution time
	});
};

const fileName = 'random_file_method_stream.txt';
const lines = 1000000; // 1 million lines

// Calling the createRandomFile function with specified file name and number of lines
createRandomFile(fileName, lines);
