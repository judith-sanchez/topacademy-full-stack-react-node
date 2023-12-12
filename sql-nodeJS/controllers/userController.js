const pool = require('../db/db');

const createUser = async (req, res) => {
	try {
		const {name, email} = req.body;
		const result = await pool.query(
			'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
			[name, email],
		);
		const newUser = result.rows[0];
		res.status(201).json({message: 'User created successfully', user: newUser});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
};

const getUsers = async (req, res) => {
	try {
		const {rows} = await pool.query('SELECT * FROM users');
		res.json({message: 'Retrieved users successfully', users: rows});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
};

const updateSingleUser = async (req, res) => {
	try {
		const {id, name, email} = req.body;
		const result = await pool.query(
			'UPDATE users SET name=$2, email=$3 WHERE id=$1 RETURNING *',
			[id, name, email],
		);
		const updatedUser = result.rows[0];
		res.json({message: 'User updated successfully', user: updatedUser});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
};

const deleteUser = async (req, res) => {
	try {
		const {id} = req.params;
		await pool.query('DELETE FROM users WHERE id=$1', [id]);
		res.json({message: 'User deleted successfully'});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
};

const updateAllUsers = async (req, res) => {
	try {
		const {oldName, newName} = req.body;
		const result = await pool.query(
			'UPDATE users SET name=$2 WHERE name=$1 RETURNING *',
			[oldName, newName],
		);
		const updatedUsers = result.rows;
		res.json({message: 'All users updated successfully', users: updatedUsers});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
};

module.exports = {
	createUser,
	getUsers,
	updateSingleUser,
	deleteUser,
	updateAllUsers,
};
