const Library  = require('../models/library');

const createLibraryController = async(req, res) => {
    try {
        let library = new Library({

             ...req.body,
            bookImage: req.files.bookImage[0].filename,
            bookFile: req.files.bookFile[0].filename,
        });

        let data = await library.save();
        res.status(201).json({
            message: 'Book added successfully',
            data
        })
    }
    catch(error) {
        res.json({error})
    }
}

const getBookImage = async(req, res) => {
    try {
        let data = await Library.find().select('bookImage bookName').sort({bookName: -1}); //1 for ascending order -1 for descending order
        res.json({
            data
        })
    }   
    catch(error) {
        res.json({error})
    }
}
module.exports = {
    createLibraryController,
    getBookImage
}