const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    phone: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

module.exports = mongoose.model('User', userSchema);