const { fileUploadController, multipleFileUploadController } = require('../controllers/fileUpload');
const fileUploader = require('../../middleware/fileUploader');
const express = require('express');
const router = express.Router();

router.post('/single', fileUploader.single('image'), fileUploadController);
router.post('/multiple', fileUploader.array('images', 5), multipleFileUploadController);

module.exports = router;
