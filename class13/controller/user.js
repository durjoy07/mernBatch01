const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerController = async(req, res) => {
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
    if(result) {
        res.status(201).json({
            message: 'user created successfully',
            user: result
        })
    }
  
    // bcrypt.hash(password, 10, (err, hash) => {
    //     if (err) {
    //         res.json({
    //             msg: 'password hashing error',
    //             err
    //         })
    //     }

    //     let user = new User({
    //         firstName,
    //         lastName,
    //         userName,
    //         phone,
    //         dateOfBirth, // yyyy-mm-dd
    //         email,
    //         password: hash
    //     });

    //     user.save()
    //         .then(result => {
    //             res.status(201).json({
    //                 message: 'user created successfully',
    //                 user: result
    //             })
    //         })
    //         .catch(error => {
    //             res.json({
    //                 error // error: error
    //             })
    //         })

    // })

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
        //=================result true or false========================
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

// const uniqueUserController = (req, res) => {
//     const { user } = req.params;
//     User.findOne({userName: user})
//     .then(result=>{
//         res.json({
//             user: result
//         })
//         console.log(result);
//     })
//     .catch(error=>{
//         res.json({
//             error
//         })
//     })
// }

const uniqueUserController = async(req,res) => {
   try{
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
   catch(error) {
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