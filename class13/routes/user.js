const { registerController, loginController, allUserController } =  require('../controller/user');

const express = require('express');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/all-user', allUserController);

module.exports = router;