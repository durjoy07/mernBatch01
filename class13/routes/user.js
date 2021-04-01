const { 
    registerController, 
    loginController, 
    allUserController,
    uniqueUserController 
} =  require('../controller/user');

const express = require('express');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/all-user', allUserController);
router.get('/unique-user/:user', uniqueUserController)

module.exports = router;