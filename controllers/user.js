/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//require module
const jwt = require('jsonwebtoken');
const { hashElement, comparePassword } = require("../helper/help");
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

        //hendel image uplode
        let fileData = {};
        if(req.file){
            fileData = {
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: req.file.size
            };
        }

        if(userEx){
            return res.status(404).json({error:"E-mail has already taken!"});
        }
        const hashPassword = await hashElement(password);
        const newUser = await new user(
            {
                name,
                email,
                password:hashPassword,
                image: fileData,
            }
        ).save();
        if(newUser){
            res.status(201).json({User: newUser});
        }
    } catch (error) {
        console.log(error);
    }
}

//login
users.login = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email||!password){
            return res.status(404).json({error:"Fill the all fields!"});
        }
        const userEx = await user.findOne({email});
        if(!userEx){
            return res.status(404).json({error:"User not found, Plese sine-up!"});
        }
        //hash token
        const matchPassword = await comparePassword(password,userEx.password);
        if(!matchPassword){
            return res.status(404).json({error:"Rong Password!"});
        }
        const token = jwt.sign({_id:userEx._id},process.env.JWT_KEY,{expiresIn:'2d'});
        //user respons
        res.status(200).json({user:userEx,Token:token});

    } catch (error) {
        console.log(error);
    }
}

//module exports
module.exports = users;