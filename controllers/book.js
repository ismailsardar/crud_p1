/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//require module
const jwt = require('jsonwebtoken');
const book = require('../models/book');
// const { hashElement, comparePassword } = require("../helper/help");

//module scffolder
const books = {};

//Book add
books.creat = async (req,res) => {
    try {
        const {name} = req.body;
        console.log(req.user._id)
        if(!name){
            return res.status(404).json({error:"Fill the all fields!"});
        }
        const bookEx = await book.findOne({name:name.trim()});
        if(bookEx){
            return res.status(404).json({error:"Book has already taken!"});
        }
        const newBook = await new book(
            {
                user: req.user._id,
                name,
            }
        ).save();
        if(newBook){
            res.status(201).json({Book: newBook});
        }
    } catch (error) {
        console.log(error);
    }
}

//Book read
books.read = async (req,res) => {
    try {
        const userEx = await book.find({user:req.user._id}).select('-user');
        if(!userEx){
            return res.status(404).json({error:"User not add any Book! Plese add Book"});
        }
        //user respons
        res.status(200).json({allBook:userEx});
    } catch (error) {
        console.log(error);
    }
}
//Single books
books.readSing = async (req,res) => {
    try {
        const {bookId} = req.params;
        const bookEx = await book.findOne({_id:bookId});
        if(!bookEx){
            return res.status(404).json({error:"Book not here, Please add first!"});
        }
        const userEx = await book.findOne({user:req.user._id});
        if(!userEx){
            return res.status(404).json({error:"User not Authorization!"});
        }
        //user respons
        res.status(200).json({Book:bookEx});
    } catch (error) {
        console.log(error);
    }
}
//update book
books.update = async (req,res) => {
    try {
        const {bookId} = req.params;
        const {name} = req.body;
        const userEx = await book.findOne({user:req.user._id});
        if(!userEx){
            return res.status(404).json({error:"User not add any Book! Plese add Book"});
        }
        const bookEx = await book.findOne({_id:bookId});
        if(!bookEx){
            return res.status(404).json({error:"Book not here, Please add first!"});
        }
        const update = await book.findByIdAndUpdate(
            {_id:bookId},
            {name},
            {new:true},
        );
        await update.save()
        //user respons
        res.status(201).json({update:update});
    } catch (error) {
        console.log(error);
    }
}
//update book
books.delete = async (req,res) => {
    try {
        const {bookId} = req.params;
        const userEx = await book.findOne({user:req.user._id});
        if(!userEx){
            return res.status(404).json({error:"User not add any Book! Plese add Book"});
        }
        const bookEx = await book.findOne({_id:bookId});
        if(!bookEx){
            return res.status(404).json({error:"Book not here, Please add first!"});
        }
        const deleteBook = await book.findByIdAndDelete(
            {_id:bookId},
        );
        //user respons
        res.status(200).json({Delete:deleteBook});
    } catch (error) {
        console.log(error);
    }
}
//module exports
module.exports = books;