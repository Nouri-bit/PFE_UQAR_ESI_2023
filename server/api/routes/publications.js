const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const pool = require('../../pg');
const bcrypt = require('bcrypt');
const app = express()
const AuthCheck = require('../middlewares/auth-check')
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
router.post("/:userid", (req,res)=>{
  console.log(upload)
  //console.log(file)
 
    const product = new publications({
        _id: new mongoose.Types.ObjectId(),
        contenu: req.body.contenu,
        like: req.body.like, 
        dislike:req.body.dislike,
        typepost:req.body.typepost,
        commentaires:req.body.commentaires, 
        datepost:Date(), 
        userId:req.params.userid, 
        position: req.body.position, 
        semantique:req.body.semantique, 
        spatial:req.body.spatial, 
        temporel:req.body.temporel, 
        images: "images\\WhatsApp Image 2023-04-28 at 4.54.32 PM.jpeg", 
        locstamp:req.body.locstamp,
        etat: false
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
    publications.find({etat: true})
    .select("_id contenu typepost userId datepost like dislike semantique spatial temporel position commentaires feedbacks")
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
            spatial:doc.spatial, 
            semantique:doc.semantique, 
            temporel:doc.temporel, 
            position: doc.position,
            commentaires: doc.commentaires,
            feedbacks: doc.feedbacks
          };
        })
      };
      res.status(200).json(response);
    })
  }
  else{
    publications.find({etat: true, typepost: { $in : [type]}})
    .select("_id contenu typepost userId datepost like dislike position semantique spatial temporel commentaires feedbacks")
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
            spatial:doc.spatial, 
            semantique:doc.semantique, 
            temporel:doc.temporel, 
            position: doc.position,
            commentaires: doc.commentaires,
            feedbacks: doc.feedbacks
          };
        })
      };
      res.status(200).json(response);
    })
  }
});

/*
// Find feedbacks list
router.get("/feedbacks/:id", (req, res, next) => {
  const id = req.params.id
  publications.find({_id: {id}.id})
    .select("feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            feedbacks: doc.feedbacks
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
*/

//get publications of citizens by id
router.get("/myposts/:id",AuthCheck, (req, res, next) => {
  const id = req.params.id
  publications.find({userId: {id}.id})
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
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


// Find likes list
router.get("/likes/:id", (req, res, next) => {
  const id = req.params.id
  publications.find({_id: {id}.id})
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
// Find commentaires list
router.get("/comments/:id", (req, res, next) => {
  const id = req.params.id
  publications.find({_id: {id}.id})
    .select("commentaires")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            commentaire: doc.commentaires
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
// get feedbacks list
router.get("/feedbacks/:id", (req, res, next) => {
  const id = req.params.id
  publications.find({_id: {id}.id})
    .select("feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            feedback: doc.feedbacks
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
router.get("/dislikes/:id",AuthCheck, (req, res, next) => {
  const id = req.params.id
  publications.find({_id: {id}.id})
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

//add like
router.patch("/like/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const newlike = [uid, type]
    publications.updateOne({_id: id}, {$push: {like: newlike} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'like ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })

});
//add comments
router.patch("/comment/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type
  const contenu = req.body.contenu
 // const newcomment = [uid, type, contenu]
    publications.updateOne({_id: id}, {$push: {commentaires: {user:uid,type: type, contenu: contenu, date: Date()}} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'comment ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })

});
//add feedbacks
router.patch("/feedback/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type
  const contenu = req.body.contenu
    publications.updateOne({_id: id}, {$push: {feedbacks: {user:uid,type: type, contenu: contenu, date: Date()}} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'feedback ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })

});
//delete comments
router.patch("/deletecomment/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type
  const contenu = req.body.contenu
  const deletecomment = [uid, type, contenu]
    publications.updateOne({_id: id}, {$pull: {commentaires: deletecomment} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'comment supprimé',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })

});
//delete like
router.patch("/likedelete/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const deletelike = [uid, type]
    publications.updateOne({_id: id}, { $pull: {like: deletelike} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'like supprimé',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })
  
});

//add dislike
router.patch("/dislike/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const newdislike = [uid, type]
    publications.updateOne({_id: id}, { $push: {dislike: newdislike} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'dislike ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })

});

//delete dislike
router.patch("/dislikedelete/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const deletedislike = [uid, type]
    publications.updateOne({_id: id}, { $pull: {dislike: deletedislike} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'dislike supprimé',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })
  
});



module.exports = router;