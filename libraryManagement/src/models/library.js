const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    bookName: String,
    author: String,
    releaseDate: {
        type: Date,
        default: Date.now
    },
    bookImage: String,
    bookFile: String,
    keyWords: [String],
    isActivated: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Library', librarySchema);