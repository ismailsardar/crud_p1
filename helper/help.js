/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
const bcrypt = require('bcrypt');

//hash password
exports.hashElement = (element) => {
    return new Promise((resolve,reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if(err){reject(err)}
            bcrypt.hash(element, salt, (err, hash) => {
                if(err){reject(err)}
                resolve(hash);
            });
        });
    });
}

//compare Password
exports.comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}