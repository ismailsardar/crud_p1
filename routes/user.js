/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//packeg require
const express = require('express');
const users = require('../controllers/user');
const router = express.Router();


//trst route 
// router.get('/', users.myTest);
router.post('/create', users.creat);

//router exports
module.exports = router;