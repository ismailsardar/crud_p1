/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//packeg require
const express = require('express');
const books = require('../controllers/book');
const { isLogin } = require('../middleware/auth');
const router = express.Router();


//trst route 
// router.get('/', users.myTest);
router.post('/addBook', isLogin, books.creat);
router.get('/reaad', isLogin, books.read);
router.get('/reaad/:bookId', isLogin, books.readSing);
router.post('/update/:bookId', isLogin, books.update);
router.delete('/delete/:bookId', isLogin, books.delete);

//router exports
module.exports = router;