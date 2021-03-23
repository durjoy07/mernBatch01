const loginController = (req, res) => {
    const {user, password} = req.params;
    res.send({
        user: user,
        password: password
    })
}

const studentController = (req, res) => {
    let student = {
        name: "Next",
        age: 12
    }
    res.send(student);
}

module.exports = {
    loginController,
    studentController
}