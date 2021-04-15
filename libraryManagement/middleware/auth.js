const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRETE;

module.exports = function(req, res, next) {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }

    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
}