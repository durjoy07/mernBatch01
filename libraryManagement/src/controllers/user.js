const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const fs = require('fs');
const { userValidator } = require('../../validator/user');


const registerController = async (req, res) => {
    try {
        const { error, value } = userValidator.validate(req.body);
        if (error) {
            res.status(400).json({
                message: "validation error",
                Error: error.details[0].message
            })
        }
        else {
            const { userName, userType, image, address, email, password } = req.body;
            let base64DataOfImage = image.split(';base64,').pop();
            let fileExtension = image.split(';')[0].split('/')[1];
            let imageFileName = `user-image${+new Date()}.${fileExtension}`;
            let pathName = `http://localhost:5000/${imageFileName}`;

            fs.writeFile(`${__dirname}/../../public/${imageFileName}`, base64DataOfImage, {encoding: 'base64'}, function(err){
                if(err) {
                    console.log('error: ', err);
                }
                else {
                    console.log('created');
                }
            })

            // var hashedPassword = await bcrypt.hash(password, 10);

            let user = new User({
                userName,
                userType,
                image: pathName,
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

const userUpdateController = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndUpdate(
            { _id: id },
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
    catch (error) {
        res.json({ error })
    }
}

const userDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndUpdate(
            { _id: id },
            {
                $set: { isDeleted: true }
            }
        );
        return res.json({
            message: 'user temporary deleted'
        })
    }
    catch (error) {
        res.json({ error })
    }
}

const deleteUserPermanently = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findOneAndRemove({ _id: id })
        return res.json({
            message: 'user deleted'
        })
    }
    catch (error) {
        res.json({ error })
    }
}

const updatePasswordController = async (req, res) => {
    try {
        const id = req.params.id;
        const { oldPassword, newPassword, confirmNewPassword } = req.body;
        const query = {
            _id: id,
            isDeleted: false
        }
        const user = await User.findOne(query);
        if (user) {
            const isValid = await bcrypt.compare(oldPassword, user.password);
            if (isValid) {
                if (newPassword === confirmNewPassword) {
                    var hashedPassword = await bcrypt.hash(newPassword, 10);
                    await User.findOneAndUpdate(
                        { _id: id },
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
            else {
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
    catch (error) {
        res.json({ error })
    }
}

const allUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json({
            user
        })
    }
    catch (error) {
        res.json({
            error
        })
    }
}

const updateAddressController = async (req, res) => {
    try {
        const { division, zipCode } = req.body.address;
        const id = req.params.id;
        await User.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    'address.division': division,
                    'address.zipCode': zipCode
                }
            }
        )

        return res.json({
            message: 'user address updated successfully'
        })

    }
    catch (error) {
        res.json({
            error
        })
    }

}

const paginationController = async (req, res, next) => {
    try {
        let { page } = req.params
        const limit = 5;

        const skip = (page - 1) * limit;
        const users = await User.find().limit(limit).skip(skip);
        if (users.length) {
            res.status(200).json({
                users
            });
        }
        else {
            res.status(200).json({
                message: 'No user found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "server error from filter",
            err
        })
    }
}

const forgotPassword = async (req, res) => {
    try {
        const secretKey = process.env.JWT_SECRETE;
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'User with this email does not exists'
            })
        }

        const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '5m' });
        await user.updateOne({ resetLink: token })

        //==================== Nodemailer ======================

        //=============== First Step =============================
        // let transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'myemail@gmail.com',
        //         pass: "1654646"
        //     }
        // })

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'sarina.feeney15@ethereal.email',
                pass: '5PxK5CCDEyTtqm6dN1'
            }
        });

        //================ Second step ======================
        let mailOptions = {
            from: "nexttopperofficial@gmail.com",
            to: "naks.studycare@gmail.com",
            subject: "Reset Password Link",
            text: token,
            html: `<button>Click me</button>`
        }

        //================= Third step ==================

        await transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                return res.json({
                    message: 'email sending failed',
                    err
                })
                console.log(err);
            }
            else {
                console.log(data)
                return res.json({
                    message: 'Email has been send successfully'
                })
            }
        })
    }
    catch (error) {
        res.json({ error })
    }
}

const resetPasswordController = async (req, res) => {
    try {
        const secretKey = process.env.JWT_SECRETE;
        const { token, newPassword } = req.body;
        var hashedPassword = await bcrypt.hash(newPassword, 10);
        const isVerfied = jwt.verify(token, secretKey);

        if (isVerfied) {
            const user = await User.findOne({ resetLink: token });
            if (user) {
                await user.updateOne({
                    password: hashedPassword,
                    resetLink: ''
                })
                return res.json({
                    message: 'Password reset succefully'
                })
            }
            else {
                return res.json({
                    message: 'User not found for this token'
                })
            }
        }
        else {
            return res.json({
                message: 'Incorrect token or it is expired'
            })
        }
    }
    catch (error) {
        res.josn({
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
    allUser,
    updateAddressController,
    paginationController,
    forgotPassword,
    resetPasswordController
}