const express = require('express'); // Get express from the node_modules
const app = express(); // app will be using express
const port = 8089; // port I want to use

app.use(express.json()); // I don't need body-parser!
// This line is stating how my app will use the data, in this case, json format

const phoneNumbers = [];

app.post('/addPhoneNumbers', (require, response) => {
	// the data (-d) the endpoint requires to work
	const phoneNumber = require.body.phoneNumber;
	if (!phoneNumber) {
		return response.status(400).json({error: 'Phone number is required'});
	}
	phoneNumbers.push(phoneNumber);
	response.status(200).json({message: 'Phone number was added successfully'});
});

app.get('/getPhoneNumberList', (require, response) => {
	response.json(phoneNumbers);
});

app.get('/', (require, response) => {
	response.send('Hello Toptal!');
});

app.listen(port, () => {
	console.log(`Express server is running on http://localhost:${port}`);
});

// Test get api endpoint -> curl http://localhost:8089/getPhoneNumberList
// Make sure the server is running
// And make sure that you are in the right folder -.-

///////////////////////

// Test post api endpoint -> curl -X POST -H "Content-Type: application/json" -d '{"phoneNumber": "0034677245517"}' http://localhost:8089/addPhoneNumbers

// curl -> command-line tool and library for transferring data with URLs
// curl default method is GET
// -X -> while you can use curl without -X and just write POST, including -X makes your command more self-explanatory and is considered a good practice, especially in cases where clarity is essential
// -H -> sets an HTTP header
// -d -> signals the data you will send
