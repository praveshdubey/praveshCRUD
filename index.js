// const express = require('express');
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import express from 'express'; //es6 concepts
import Connection from './database/db.js';
import Routes from './Routes/Routes.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// var cors = require('cors');
app.use(cors(({origin: true, credentials: true})));

app.use('/',Routes)


// const port =8000;
const port = process.env.PORT || 3000;
const username = process.env.USERNAME;
const password =process.env.PASS;

Connection(username,password);

app.listen(port,()=>{
 console.log(`server started ${port}`)
})