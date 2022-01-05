const jwt = require('jsonwebtoken');

exports.auth = async function(req, res, next){  

    try{    
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch(err){

        return res.status(401).send();
    }
}