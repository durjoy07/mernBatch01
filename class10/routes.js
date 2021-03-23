const express =  require('express')
const { 
    loginController, 
    studentController 
} = require('./controller');

const router = express.Router();

router.get('/login/:user/:password', loginController);
router.get('/student', studentController);

module.exports = router;