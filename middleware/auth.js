/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/

//require packeg
const jwt =require("jsonwebtoken");

exports.isLogin = (req,res,next) => {
    try {
        const decode = jwt.verify(
            req.headers.token,
            process.env.JWT_KEY,
            );
        req.user = decode;
        next();    
    } catch (error) {
        return res.status(401).json(error);
    }
}