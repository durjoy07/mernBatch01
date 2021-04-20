const jwt_docode = require('jwt-decode');

module.exports = function permission(userRole) {
    return function (req, res, next) {
        const token = req.header('Authorization');
        if(!token) return res.status(401).json({
            message: 'unauthorized'
        })

        try {
            let decode = jwt_docode(token);
            const { userType } = decode;
            const verified = userRole.includes(userType);
            if(verified) next();
            else {
            next(res.status(401).json({
                message: 'You are not valid user'
            }))
            }
        }
        catch(error) {
            res.status(401).json({
                message: 'You do not have permission for this api',
                error
            })
        }
    }
}