const jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            Success: false,
            message: 'Unauthorized access, please provide token!' 
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized Access, Access Denied!!!' 
        });
    }
}