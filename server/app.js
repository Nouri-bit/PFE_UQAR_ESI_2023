const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
mongoose.connect('mongodb+srv://'+process.env.MONGO_USERNAME+':'+process.env.MONGO_PW+'@pfemongodb.xni5toy.mongodb.net/?retryWrites=true&w=majority')
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
const RoutesPublications = require('./api/routes/publications');
app.use('/posts',RoutesPublications);
const RoutesDeclarations = require('./api/routes/declarations');
app.use('/declarations',RoutesDeclarations);
const RoutesSondages = require('./api/routes/sondages');
app.use('/sondages',RoutesSondages);
const RoutesForms = require('./api/routes/forms');
app.use('/forms',RoutesForms);
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