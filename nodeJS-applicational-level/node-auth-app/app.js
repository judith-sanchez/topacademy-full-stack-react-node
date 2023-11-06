const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

const users = JSON.parse(fs.readFileSync('database.json'));
console.log(`The users are ${JSON.stringify(users)}`);

// JWT Configuration
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.secretKey,
};

passport.use(
	new JwtStrategy(jwtOptions, (jwtPayload, done) => {
		const user = users.users.find(u => u.id === jwtPayload.id);
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	}),
);

app.listen(8089, () => {
	console.log('Server started on http://localhost:8089');
});

app.post('/login', (req, res) => {
	console.log('Starting login');
	const {username, password} = req.body;

	const user = users.users.find(u => u.username === username);

	console.log(`Password ${password}`);
	console.log(`User Password ${user.password}`);

	// if (!user || !bcrypt.compareSync(password, user.password)) {
	// 	return res.status(401).json({message: 'Authentication failed'});
	// }

	console.log(`The user is ${JSON.stringify(user)}`);

	if (!user || password !== user.password) {
		return res.status(401).json({message: 'Authentication failed'});
	}

	const token = jwt.sign({id: user.id}, config.secretKey, {
		expiresIn: '1h',
	});

	console.log(`The token is ${token}`);

	res.json({token});
});
