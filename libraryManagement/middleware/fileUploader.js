const multer = require('multer');
const path = require('path')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+ file.originalname)
    }
})
const maxSize = 10000000; // 10mb
const upload = multer({
    storage: fileStorageEngine,
    limits: { fieldSize: maxSize }
})

module.exports = upload;