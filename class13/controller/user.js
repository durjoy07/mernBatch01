const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = "jshdyfiue2146546sdafekuyqiuehjhsadf%&*$^*";

const registerController = async (req, res) => {
    const { firstName, lastName, userName, phone, dateOfBirth, email, password } = req.body;

    var hashedPassword = await bcrypt.hash(password, 10);

    let user = new User({
        firstName,
        lastName,
        userName,
        phone,
        dateOfBirth, // yyyy-mm-dd
        email,
        password: hashedPassword
    });

    let result = await user.save();
    if (result) {
        res.status(201).json({
            message: 'user created successfully',
            user: result
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, userName, password } = req.body;

        const user = await User.findOne({ userName });
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);
            let data = {
                userName: user.userName,
                phone: user.phone
            }
            const token = jwt.sign(data, secretKey, { expiresIn: '1h' })
            if (isValid) {
                res.json({
                    message: "Login successfull",
                    token
                })
            }
            else {
                res.json({
                    message: "password doesn't match"
                })
            }
        }
        else {
            res.json({
                message: "User not found"
            })
        }
    }
    catch (error) {
        console.log("Error: ", error);
        res.json({
            error
        })
    }
}

const allUserController = (req, res) => {
    User.find()
        .then(user => {
            res.json({
                user
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
}


const uniqueUserController = async (req, res) => {
    try {
        const { user } = req.params;
        let userInfo = await User.findOne({ userName: user });

        if (userInfo) {
            res.json({
                user: userInfo
            })
        }
        else {
            res.json({
                message: "user not found"
            })
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            error
        })
    }
}


module.exports = {
    registerController,
    loginController,
    allUserController,
    uniqueUserController
}