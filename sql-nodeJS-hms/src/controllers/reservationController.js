const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllReservations = async (req, res) => {
	const reservations = await prisma.reservation.findMany();
	res.json(reservations);
};

const createReservation = async (req, res) => {
	const {amount, guestSize, promoCode, beganAt, endedAt, userId} = req.body;
	const reservation = await prisma.reservation.create({
		data: {amount, guestSize, promoCode, beganAt, endedAt, userId},
	});
	res.json(reservation);
};

module.exports = {
	getAllReservations,
	createReservation,
};
