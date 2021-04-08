const fileUploadController = async(req, res) => {
    console.log(req.file);
    res.send('file uploaded successfully')
}

module.exports = {
    fileUploadController
}