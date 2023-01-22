/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const bookSchema = new mongoose.Schema(
    {
        user:{
            type: ObjectId,
            required: true,
            ref: "book",
        },
        name:{
            type: String,
            trim: true,
            required: [true, "Booke name is require!"],
            unique: true,
        }
    },
    {timestamps:true,versionKey:false},
);
const book = mongoose.model('books', bookSchema);
module.exports = book;