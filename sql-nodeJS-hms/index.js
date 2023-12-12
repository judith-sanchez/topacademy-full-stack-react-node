const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/reservations', reservationRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
