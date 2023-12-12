const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.createUser);
router.get('/', userController.getUsers);
router.put('/single/update', userController.updateSingleUser);
router.delete('/:id', userController.deleteUser);
router.put('/all/update', userController.updateAllUsers);

module.exports = router;
