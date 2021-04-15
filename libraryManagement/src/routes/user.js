const { 
    registerController, 
    loginController, 
    userUpdateController, 
    userDelete,
    deleteUserPermanently,
    updatePasswordController,
    allUser
 } = require('../controllers/user');
const express = require('express');
const router = express.Router();

const Auth = require('../../middleware/auth');

router.post('/register', registerController);
router.post('/login', loginController);
router.put('/update/:id', userUpdateController);
router.put('/delete/:id', userDelete);
router.delete('/delete-permanent/:id', deleteUserPermanently);
router.put('/change-password/:id', updatePasswordController)
router.get('/all-user',Auth, allUser)
module.exports = router;