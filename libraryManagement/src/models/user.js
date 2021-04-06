const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    userType: {
        type: String,
        enum: ["student", "teacher", "librarian"],
        default: "student"
    },
    email: {
        type: String,
        unique: true
    },
    password: String
});

module.exports = mongoose.model('User', userSchema);