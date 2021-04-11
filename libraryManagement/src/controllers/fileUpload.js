const fileUploadController = async(req, res) => {
    console.log(req.file);
    res.send('file uploaded successfully')
}

const multipleFileUploadController = async(req, res) => {
    console.log(req.files);
    res.send('file uploaded done')
}

module.exports = {
    fileUploadController,
    multipleFileUploadController
}