/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//packeg require
const express = require('express');
const user = require('../controllers/usercon');
const router = express.Router();


//trst route
router.get('/', user.test);

//router exports
module.exports = router;