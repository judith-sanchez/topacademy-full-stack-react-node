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
