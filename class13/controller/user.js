const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerController = (req, res) => {
    const { firstName, lastName, userName, phone, dateOfBirth, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.json({
                msg: 'password hashing error',
                err
            })
        }

        let user = new User({
            firstName,
            lastName,
            userName,
            phone,
            dateOfBirth, // yyyy-mm-dd
            email,
            password: hash
        });

        user.save()
            .then(result => {
                res.status(201).json({
                    message: 'user created successfully',
                    user: result
                })
            })
            .catch(error => {
                res.json({
                    error // error: error
                })
            })

    })

}

const loginController = (req, res) => {
    const { email, userName, password } = req.body;

    User.findOne({email, userName})
    .then(user=> {
       if(user) {
            bcrypt.compare(password, user.password, (err, result)=> {
                if(err) {
                    res.json({
                        err
                    })
                }
               if(result) {
                   res.json({
                       message: "Login successfull"
                   })
               }
               else {
                   res.json({
                       message: "password doesn't match"
                   })
               }
            })
       }
       else {
           res.json({
               message: "user not found"
           })
       }
    })
    .catch(err=> {
        res.json({
            err
        })
    })
}

const allUserController = (req, res) =>{
    User.find()
    .then(user=>{
        res.json({
            user
        })
    })
    .catch(err=> {
        res.json({
            err
        })
    })
}

module.exports = {
    registerController,
    loginController,
    allUserController
}