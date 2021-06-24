const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: String,
    email: String,
    address: {
        division: String,
        district: String
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Test', testSchema);