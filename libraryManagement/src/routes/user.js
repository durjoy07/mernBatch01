const { 
    registerController, 
    loginController, 
    userUpdateController, 
    userDelete,
    deleteUserPermanently
 } = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.put('/update/:id', userUpdateController);
router.put('/delete/:id', userDelete);
router.delete('/delete-permanent/:id', deleteUserPermanently)
module.exports = router;