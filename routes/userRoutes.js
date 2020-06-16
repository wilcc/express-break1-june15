const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const userController = require('../controllers/userControllers');
const User = require('../models/User');

router.get('/', userController.getAllUsers);
router.get('/getsingle/:id', userController.getSingleUser);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
