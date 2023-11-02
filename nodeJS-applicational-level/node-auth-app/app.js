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
console.log(`The users are ${users}`);

// JWT Configuration
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.secretKey,
};
console.log(`The secretKey is ${jwtOptions}`);

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

	console.log(`The credentials I am sending are ${username} and ${password}`);

	const user = users.users.find(u => u.username === username);

	console.log(`The user is ${user}`);

	if (!user || !bcrypt.compareSync(password, user.password)) {
		return res.status(401).json({message: 'Authentication failed'});
	}

	const token = jwt.sign({id: user.id}, config.secretKey, {
		expiresIn: '1h',
	});

	res.json({token});
});
