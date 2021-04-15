const fileUploadController = async(req, res) => {
    if(req.file) {
        res.json({
            message: 'file uploaded successfully',
            fileDetails: req.file
        })
    }
    else {
        res.json({
            message: 'upload a valid image file such as jpg, jpeg, png'
        })
    }
}

const multipleFileUploadController = async(req, res) => {
    console.log(req.files);
    res.send('file uploaded done')
}

module.exports = {
    fileUploadController,
    multipleFileUploadController
}