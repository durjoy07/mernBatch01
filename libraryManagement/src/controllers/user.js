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
            const { userName, userType, address, email, password } = req.body;

            // var hashedPassword = await bcrypt.hash(password, 10);

            let user = new User({
                userName,
                userType,
                address,
                email,
                password
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

const userUpdateController = async(req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndUpdate(
            {_id : id},
            {
                $set: req.body
            },
            { multi: true }
        )
        return res.json({
            message: 'user updated successfully',
            updatedResult: req.body
        })
    }
    catch(error) {
        res.json({error})
    }
}

const userDelete = async(req, res) => {
    try{
        const id = req.params.id;
        await User.findByIdAndUpdate(
            {_id: id},
            {
                $set: { isDeleted: true }
            }
        );
        return res.json({
            message: 'user temporary deleted'
        })
    }
    catch(error) {
        res.json({error})
    }
}

const deleteUserPermanently = async(req, res) => {
    try {
        const id = req.params.id;
        await User.findOneAndRemove({_id: id})
        return res.json({
            message: 'user deleted'
        })
    }
    catch(error) {
        res.json({error})
    }
}

const updatePasswordController = async(req, res) => {
    try {
        const id = req.params.id;
        const { oldPassword, newPassword, confirmNewPassword } = req.body;
        const query = {
            _id: id,
            isDeleted: false
        }
        const user = await User.findOne(query);
        if(user) {
            const isValid = await bcrypt.compare(oldPassword, user.password);
            if(isValid) {
                if(newPassword ===  confirmNewPassword) {
                    var hashedPassword = await bcrypt.hash(newPassword, 10);
                    await User.findOneAndUpdate(
                        {_id: id},
                        {
                            $set: {
                                password: hashedPassword
                            }
                        }
                    )
                }
                else {
                    res.json({
                        message: 'new password and confirmNewPassword does not match'
                    })
                }
            }
            else{
                res.json({
                    message: 'password does not match'
                })
            }
        }
        else {
            res.json({
                message: 'User not found'
            })
        }
        return res.json({
            message: 'password updated successfully'
        })
    }
    catch(error) {
        res.json({error})
    }
}

const allUser = async(req,res) => {
    try{
    const user = await User.find();
    res.json({
        user
    })
}
catch(error) {
    res.json({
        error
    })
}
}



module.exports = {
    registerController,
    loginController,
    userUpdateController,
    userDelete,
    deleteUserPermanently,
    updatePasswordController,
    allUser
}