const { createTestController, getAllTest } = require('../controllers/test');

const express = require('express');
const router = express.Router();

// const Auth = require('../../middleware/auth');
// const permission = require('../../middleware/permission');

router.post('/add-test', createTestController);
router.get('/book-images', getAllTest);
module.exports = router;