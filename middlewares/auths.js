const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');

const auths = (req, res, next) => {
    req.user = null;
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')) {
      return  res.status(httpStatus.UNAUTHORIZED).json({message: "Authentification header invalide"});
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: payload.userId, name: payload.name};
        console.log('authentification successful', req.user);
        next();
    } catch (error) {
        return  res.status(httpStatus.UNAUTHORIZED).json({message: "Authentification token invalide"});
    }
}

module.exports = auths;