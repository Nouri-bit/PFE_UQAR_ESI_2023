const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const pool = require('../../pg');
const bcrypt = require('bcrypt');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
// NoSQL publications

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log(file)
    cb(null, './images');
    console.log(cb)
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  console.log(file)
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });
const publications = require("../models/post");
router.post("/:userid",upload.single('images'), (req,res)=>{
  console.log(upload)
  //console.log(file)
 
    const product = new publications({
        _id: new mongoose.Types.ObjectId(),
        contenu: req.body.contenu,
        like: req.body.like, 
        dislike:req.body.dislike,
        typepost:req.body.typepost,
        commentaires:req.body.commentaires, 
        datepost:req.body.datepost, 
        userId:req.params.userid, 
        position: req.body.position, 
        semantique:req.body.semantique, 
        spatial:req.body.spatial, 
        temporel:req.body.temporel, 
        images: req.file.path, 
        locstamp:req.body.locstamp
      });
      product
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Post a été crée avec succès",
            
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
})
router.get("/:type", (req, res, next) => {
  const type = req.params.type
  if (type === 'général'){
    publications.find()
    .select("_id contenu typepost userId datepost like dislike commentaires feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            contenu: doc.contenu,
            typepost: doc.typepost,
            userId: doc.userId,
            datepost: doc.datepost,
            like: doc.like,
            dislike: doc.dislike,
            commentaires: doc.commentaires,
            feedbacks: doc.feedbacks
          };
        })
      };
      res.status(200).json(response);
    })
  }
  else{
    publications.find({typepost: {type}.type})
    .select("_id contenu typepost userId datepost like dislike commentaires feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            contenu: doc.contenu,
            typepost: doc.typepost,
            userId: doc.userId,
            datepost: doc.datepost,
            like: doc.like,
            dislike: doc.dislike,
            commentaires: doc.commentaires,
            feedbacks: doc.feedbacks
          };
        })
      };
      res.status(200).json(response);
    })
  }
});


// Find likes list
router.get("/likes/:id", (req, res, next) => {
  const id = req.params.type
  publications.find({id: {id}.id})
    .select("like")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            like: doc.like
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Find dislikes list
router.get("/dislikes/:id", (req, res, next) => {
  const id = req.params.type
  publications.find({id: {id}.id})
    .select("dislike")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            dislike: doc.dislike
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


router.post("/like/:id/:userid", (req, res, next) => {
  const id = req.params.id
  const userid = req.params.userid
  publications.replaceOne(
      { _id: {id} },
      { like: {likeId: {userid}} }
    )
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



module.exports = router;