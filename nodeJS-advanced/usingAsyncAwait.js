const fs = require('fs');

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

const createRandomFile = async (fileName, lines) => {
	const start = new Date().getTime();

	for (let i = 0; i < lines; i++) {
		const randomLine = generateRandomString() + '\n';
		await fs.promises.appendFile(fileName, randomLine);
	}

	const end = new Date().getTime();
	console.log(`Method async/await took ${end - start} milliseconds.`);
};

const fileName = 'random_file_method_async.txt';
const lines = 1000000;

createRandomFile(fileName, lines);
