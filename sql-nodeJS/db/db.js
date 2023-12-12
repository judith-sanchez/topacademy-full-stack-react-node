const {Pool} = require('pg');

const pool = new Pool({
	user: 'yuyi',
	host: 'localhost',
	database: 'students',
	password: '172893',
	port: 5432,
});

module.exports = pool;
