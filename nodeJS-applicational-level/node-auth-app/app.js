const express = require('express');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('./config');

const app = express();
app.use(express.json());

const users = JSON.parse(fs.readFileSync('database.json'));

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
	const {username, password} = req.body;
	const user = users.users.find(u => u.username === username);

	if (!user) {
		return res.status(401).json({message: 'No such username'});
	}

	if (password !== user.password) {
		return res.status(401).json({message: 'Incorrect credentials'});
	}

	const token = jwt.sign({id: user.id}, config.secretKey, {
		expiresIn: '1h',
	});

	console.log(`The token is ${token}`);

	res.status(200).json({token});
});

// Protected Endpoint
app.get(
	'/protected',
	passport.authenticate('jwt', {session: false}),
	(req, res) => {
		const user = req.user;
		res.json({message: `Hello ${user.username}, this is a secret message`});
	},
);

// Get JWT
// curl -X POST -H "Content-Type: application/json" -d '{"username":"judith", "password":"valencia123"}' http://localhost:8089/login

// Show protected content
// curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5MzY2MDk3LCJleHAiOjE2OTkzNjk2OTd9.nTf0oZ0e3JLAoth3xokhUqCMAq5EHGPBPriETDGq4Eg" http://localhost:8089/protected
