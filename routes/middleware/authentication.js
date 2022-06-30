const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }
    const authToken = req.headers.authorization.split(" ")[1];
    jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid auth token");
        } 


        // if(decoded.user_role==="Admin") {
        //     decoded = {...decoded,TOP_SECRET_INFO:"Patrick is cool"}
        //     req.user = decoded;
        //     next();
         else {
            req.user = decoded;
            next();
        }
    
    
    
    }); 
};

module.exports = authenticate;