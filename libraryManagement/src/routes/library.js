const { createLibraryController, getBookImage } = require('../controllers/library');
const fileUploader = require('../../middleware/fileUploader');

const express = require('express');
const router = express.Router();

const Auth = require('../../middleware/auth');
const permission = require('../../middleware/permission');

router.post('/add-book',fileUploader.fields([{name: 'bookImage', maxCount: 1}, {name: 'bookFile', naxCount: 1}]), createLibraryController);
router.get('/book-images', getBookImage);
module.exports = router;