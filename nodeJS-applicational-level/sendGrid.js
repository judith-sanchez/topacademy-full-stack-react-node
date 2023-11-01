// https://docs.sendgrid.com/

const API_KEY =
	'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';

const URL = 'https://api.sendgrid.com/v3/mail/send';

const emailData = {
	personalizations: [
		{
			to: [{email: 'judith.sanchez@toptal.com', name: 'Judith'}],
			subject: 'Hello, Toptal!',
		},
	],
	content: [{type: 'text/plain', value: 'Heya!'}],
	from: {email: 'judith.sanchez@toptal.com', name: 'Judith'},
	reply_to: {email: 'judith.sanchez@toptal.com', name: 'Judith'},
};

fetch(URL, {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(emailData),
})
	.then(response => {
		if (response.status === 202) {
			console.log('Email sent successfully');
		} else {
			console.error('Email sending failed with status:', response.status);
			response.text().then(data => console.error('Error Details:', data));
		}
	})
	.catch(error => {
		console.error('Email sending failed:', error);
	});

// npm install node-fetch since I am not using a browser
// Not working -> node sendGrid.js

// Error:
// {"errors":[{"message":"The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved. Visit https://sendgrid.com/docs/for-developers/sending-email/sender-identity/ to see the Sender Identity requirements","field":"from","help":null}]}
