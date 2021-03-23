const isAuthenticate = (req, res, next) => {
    const { user, password } = req.params;
    console.log('time', new Date().toLocaleString());
    const ourUser = 'admin';
    const ourPassword = '123456';
    if (ourUser === user && ourPassword === password) {
        next()
    }
    else next('user name or password is incorrect')
}

module.exports = isAuthenticate;