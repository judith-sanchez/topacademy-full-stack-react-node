const crypto = require('crypto'); // crypto is a built-in module

const secretKey = crypto.randomBytes(32).toString('hex');

module.exports = {
	secretKey: secretKey,
};
