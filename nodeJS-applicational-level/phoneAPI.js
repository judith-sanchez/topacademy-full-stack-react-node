const express = require('express');
const app = express();
const port = 8089;

app.use(express.json()); // Instead of body-parser

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
