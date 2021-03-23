const loginController = (req, res) => {
    const { user } = req.params;
    res.send(`<h1>Welcome to you ${user}</h1>`);
}

const studentController = (req, res) => {
    res.send('student')
}

const helloController = (req, res)=> {
    res.send('hello, All')
}
module.exports = {
    loginController,
    studentController,
    helloController
}
