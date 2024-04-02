const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const identitycard = req.body.identitycard || req.query.identitycard || req.headers['x-access-identitycard'];
    if(!identitycard){
        return next(new createHttpError(401, 'Identitycard not provided'));
    }
    try{
        const decodedToken = jwt.verify(identitycard, process.env.JWT_IDENTITY_KEY);
        req.user = decodedToken;
        next();
    }catch(error){
        next(new createHttpError(400, 'Invalid Identitycard'));
    }
}
