const { fileUploadController } = require('../controllers/fileUpload');
const fileUploader = require('../../middleware/fileUploader');
const express = require('express');
const router = express.Router();

router.post('/single', fileUploader.single('image'), fileUploadController);

module.exports = router;
