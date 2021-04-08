const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userValidator } = require('../../validator/user');


const registerController = async (req, res) => {
    try {
        const { error, value } = userValidator.validate(req.body);
        console.log('error', error);
        console.log('value', value);
        if (error) {
            res.status(400).json({
                message: "validation error",
                Error: error.details[0].message
            })
        }
        else {
            const { userName, userType, email, password } = req.body;

            var hashedPassword = await bcrypt.hash(password, 10);

            let user = new User({
                userName,
                userType,
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
    }
    catch (error) {
        console.log('Error: ', error);
        res.json({
            error
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const secretKey = process.env.JWT_SECRETE;
        const user = await User.findOne({ userName });
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);
            let data = {
                userName: user.userName,
                userType: user.userType
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

module.exports = {
    registerController,
    loginController
}