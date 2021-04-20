const { 
    registerController, 
    loginController, 
    userUpdateController, 
    userDelete,
    deleteUserPermanently,
    updatePasswordController,
    allUser,
    updateAddressController,
    paginationController,
    forgotPassword,
    resetPasswordController
 } = require('../controllers/user');

const express = require('express');
const router = express.Router();

const Auth = require('../../middleware/auth');
const permission = require('../../middleware/permission');

router.post('/register', registerController);
router.post('/login', loginController);
router.put('/update/:id', userUpdateController);
router.put('/delete/:id',Auth, permission(['librarian']),  userDelete);
router.delete('/delete-permanent/:id', Auth, permission(['librarian']), deleteUserPermanently);
router.put('/change-password/:id', updatePasswordController)
router.get('/all-user',Auth, allUser),
router.put('/update-address/:id', updateAddressController);
router.get('/get-user/:page', paginationController);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPasswordController);
module.exports = router;