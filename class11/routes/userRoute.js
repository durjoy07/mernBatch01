const express = require('express');
const router = express.Router();
const { loginController, studentController, helloController } = require('../controller/userController')

const auth = require('../middleware/authMiddleware')

router.get('/login/:user/:password',auth, loginController);
router.get('/student/:user/:password',auth, studentController);
router.get('/hello', helloController)

module.exports = router;

