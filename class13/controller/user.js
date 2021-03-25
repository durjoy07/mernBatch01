const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerController = (req, res) => {
    const {  name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash)=>{
        if(err) {
            res.json({
                msg: 'password hashing error',
                err
            })
        }

        let user = new User({
            name,  // name: name
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

module.exports = {
    registerController
}