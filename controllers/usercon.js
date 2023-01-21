/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/

//module scffolder
const user = {};

//test controller
user.test = (req,res) => {
    res.status(200).send('Test router');
} 

//module exports
module.exports = user;