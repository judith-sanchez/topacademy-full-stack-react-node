const fs = require('fs');
const os = require('os');
const {Readable} = require('stream');

const generateRandomString = () => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const length = 10;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
};

const createRandomFile = (fileName, lines) => {
	const start = new Date().getTime();
	const writeStream = fs.createWriteStream(fileName);

	const readableStream = Readable.from({
		*[Symbol.iterator]() {
			for (let i = 0; i < lines; i++) {
				yield generateRandomString() + '\n';
			}
		},
		objectMode: true,
		highWaterMark: 1024 * 1024, // Adjust the buffer size as needed
	});

	readableStream.pipe(writeStream);

	writeStream.on('finish', () => {
		const end = new Date().getTime();
		console.log(`Method Stream took ${end - start} milliseconds.`);
	});
};

const fileName = 'random_file_method_stream.txt';
const lines = 1000000;

createRandomFile(fileName, lines);
