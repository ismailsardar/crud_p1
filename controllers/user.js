/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//require module

const user = require("../models/user");

//module scffolder
const users = {};

// users.myTest = async (req,res) =>{
//     console.log('this is test Route!');
//     res.end();
// }

//user creatae
users.creat = async (req,res) =>{
    try {
        const {name, email, password} = req.body;
        if(!name||!email||!password){
            return res.status(404).json({error:"Fill the all fields!"});
        }
        const userEx = await user.findOne({email});
        if(userEx){
            return res.status(404).json({error:"E-mail has already taken!"});
        }
        const newUser = await new user(
            {
                name,
                email,
                password,
            }
        ).save();
        if(newUser){
            res.status(201).json({User: newUser});
        }
    } catch (error) {
        console.log(error);
    }
}

//module exports
module.exports = users;