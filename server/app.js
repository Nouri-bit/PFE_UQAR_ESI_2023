const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
mongoose.connect('mongodb://127.0.0.1:27017/PFE_DB');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json();
  }
  next();
});

mongoose.Promise=global.Promise; 

const RoutesCitoyens = require('./api/routes/citoyens');
app.use('/citoyens',RoutesCitoyens);
app.use((req,res,next)=>{
  const err= new Error('Error found');
  err.status=404;
  next(err);
})
app.use((err,req,res,next)=>{
  res.status(err.status || 500);
  res.json({
      err:{
          message:err.message
      }
  });
});
module.exports= app;