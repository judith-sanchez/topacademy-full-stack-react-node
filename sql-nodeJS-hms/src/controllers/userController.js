const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
};

const createUser = async (req, res) => {
	const {name, sex, email, age, country} = req.body;
	const user = await prisma.user.create({
		data: {name, sex, email, age, country},
	});
	res.json(user);
};

module.exports = {getAllUsers, createUser};
