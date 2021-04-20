const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    userName: String,
    userType: {
        type: String,
        enum: ["student", "teacher", "librarian"],
        default: "student"
    },
    address: {
        division: String,
        district: String,
        upazila: String, 
        zipCode: String, 
        area: String
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    resetLink: {
        type: String, 
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', function(next) {
    var user = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt){
            if(err) {
                return next(err)
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) {
                    return next(err)
                }
                if(hash) {
                    user.password = hash
                }
                next();
            })
        })
    }
    else {
        next()
    }
})

module.exports = mongoose.model('User', userSchema);