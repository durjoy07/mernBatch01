const User = require('../models/user');

const registerController = (req, res) => {
    const {  name, email, password } = req.body;
    let user = new User({
        name,
        email,
        password
    });

    user.save()
    .then(result=> {
        res.status(201).json({
            message: 'user created successfully',
            user: result
        })
    })
    .catch(error=> {
        res.json({
            error
        })
    })
}