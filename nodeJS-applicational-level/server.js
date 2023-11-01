/* 

// Import the required Node.js modules
// There a more node modules!!!
const http = require('http');

// This is a basic HTTP server
const server = http.createServer((request, response) => {
	// res.writeHead(statusCode, headers)
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// After calling res.writeHead, the response is not sent to the client yet
	// It's prepared and ready to be sent, but I still need to call res.end to actually send it
	response.end('Hello Toptal!');
});

const port = 8089;

// Starts the server
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

// In order to run this server I need to enter on the terminal "node server.js"

 */

/* 

// Import express
const express = require('express');
const app = express();
const port = 8089;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Define the route with the desired response
app.get('/', (require, response) => {
	response.send('Hello Toptal!');
});

// Start express server
app.listen(port, () => {
	console.log(`Express server is running on http://localhost:${port}`);
});


// node server.js
// http://localhost:8089/

*/

const express = require('express');
const app = express();
const port = 8089;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const phoneNumbers = [];

app.post('/addPhoneNumbers', (req, res) => {
	const phoneNumber = req.body.phoneNumber;
	if (!phoneNumber) {
		return res.status(400).json({error: 'Phone number is required'});
	}
	phoneNumbers.push(phoneNumber);
	res.status(200).json({message: 'Phone number was added successfully'});
});

app.get('/getPhoneNumberList', (req, res) => {
	res.json(phoneNumbers);
});

app.get('/', (req, res) => {
	res.send('Hello Toptal!');
});

app.listen(port, () => {
	console.log(`Express server is running on http://localhost:${port}`);
});
