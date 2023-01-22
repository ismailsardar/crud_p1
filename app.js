/**
 * sub: Basic CRUD project Library manegment
 * Date: 22/01/2023
 * Auth: Ismile Sardar 
**/

//require packeg
const {readdirSync} = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
require('dotenv').config();

//middelware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(morgan('dev'));
app.use('/uplodes', express.static(path.join(__dirname, 'uplodes')));
//file read
readdirSync('./routes/').map( file => app.use('/api/v1', require(`./routes/${file}`)));
// readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 
//coman router
app.use('*',(req,res) => {
    res.status(404).send('This is Rong Router');
});
//mongoose conectsd
mongoose
    .connect(process.env.DATA_BASE)
    .then((v)=>{
        console.log('DB Conected');
    })
    .catch((e)=>{console.log(e)});

//app module exprote
module.exports = app;