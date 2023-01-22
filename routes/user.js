/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/
//packeg require
const express = require('express');
const users = require('../controllers/user');
const upload = require('../helper/uplode');
const router = express.Router();


//trst route 
// router.get('/', users.myTest);
router.post('/create', upload.single("image"), users.creat);
router.post('/login', users.login);

//router exports
module.exports = router;