const { registerController, loginController } = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;