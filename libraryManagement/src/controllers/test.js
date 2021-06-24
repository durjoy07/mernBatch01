const Test  = require('../models/test');

const createTestController = async(req, res) => {
    try {
        let test = new Test(req.body);
        let data = await test.save();
        res.status(201).json({
            message: 'Test added successfully',
            data
        })
    }
    catch(error) {
        res.json({error})
    }
}

const getAllTest = async(req, res) => {
    try {
        let data = await Test.find();
        res.json({
            data
        })
    }   
    catch(error) {
        res.json({error})
    }
}
module.exports = {
    createTestController,
    getAllTest
}