const fs = require('fs');
const os = require('os');

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
	const fileStream = fs.createWriteStream(fileName);

	for (let i = 0; i < lines; i++) {
		fileStream.write(generateRandomString() + '\n');
	}

	fileStream.end(() => {
		const end = new Date().getTime();
		console.log(`Method Loop took ${end - start} milliseconds.`);
	});
};

const fileName = 'random_file_method_loop.txt';
const lines = 1000000; // 1 million lines

createRandomFile(fileName, lines);
