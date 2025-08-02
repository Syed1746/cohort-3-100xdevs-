const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config/config");
const adminMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    const decodingToken = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if (decodingToken) {
        req.adminId = decodingToken.id;
        next();
    } else {
        res.status(403).json({
            message: "you are not signed in - Admin"
        })
    }
}

module.exports = adminMiddleware;