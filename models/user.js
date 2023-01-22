/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//require module
const mongoose = require('mongoose');

//user model Schema
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            trim: true,
            required: [true, "Name is Required!"],
        },
        email:{
            type: String,
            trim: true,
            required: [true, "E-mail is Required!"],
            unique: true,
            match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "please enter a valide emile"],
        },
        password:{
            type: String,
            trim: true,
            required: [true, "password is Required!"],
            minLength: [6, "Password length must be 6 creacter!"]
        },
        image:{
            type: Object,
            default: {},
        },

    },
    {timestamps:true,versionKey:false} 
);

//user model creat
const user = mongoose.model('users', userSchema);
//model exports
module.exports = user;