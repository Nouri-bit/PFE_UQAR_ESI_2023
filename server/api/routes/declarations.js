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

// NoSQL declarations

const declarations = require("../models/declaration");

//get all declarations
router.get("/", (req, res, next) => {

    declarations.find().sort({"like":-1})
    .select("_id contenu userId userType datedeclaration like dislike commentaires feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            contenu: doc.contenu,
            userId: doc.userId,
            userType: doc.userType,
            datedeclaration: doc.datedeclaration,
            like: doc.like,
            dislike: doc.dislike,
            commentaires: doc.commentaires,
            feedbacks: doc.feedbacks
          };
        })
      };
      res.status(200).json(response);
    })
});
router.get("/trends", (req, res, next) => {

  declarations.find({}).sort({"dislike":-1})
  .select("_id contenu userId userType datedeclaration like dislike commentaires feedbacks")
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      posts: docs.map(doc => {
        return {
          _id: doc._id,
          contenu: doc.contenu,
          userId: doc.userId,
          userType: doc.userType,
          datedeclaration: doc.datedeclaration,
          like: doc.like,
          dislike: doc.dislike,
          commentaires: doc.commentaires,
          feedbacks: doc.feedbacks
        };
      })
    };
    res.status(200).json(response);
  })
});
//get declarations of managers by id
router.get("/mydeclarations/:id", (req, res, next) => {
  const id = req.params.id
  declarations.find({userId: {id}.id})
    .select("_id contenu userId datepost like dislike commentaires feedbacks")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            contenu: doc.contenu,
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

//add new declaration
router.post("/newdeclaration/:declarationinput/:userId/:userType/:date", (req, res, next) => {
  const declarationinput = req.params.declarationinput
  const userId = req.params.userId
  const userType = req.params.userType
  const date = req.params.date
  const newdeclaration = {
    _id: new mongoose.Types.ObjectId(),
    contenu:  declarationinput,
    like: [],
    dislike: [],
    datedeclaration: date,
    userId: userId,
    userType: userType,
    images: [],
    commentaires: [],
    feedbacks: []
  }
  //console.log(declaration)
  declarations.create(newdeclaration)
});

// Find likes list
router.get("/likes/:id", (req, res, next) => {
  const id = req.params.id
  declarations.find({_id: {id}.id})
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

//add like
router.patch("/like/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const newlike = [uid, type]
    declarations.updateOne({_id: id}, { $push: {like: newlike} })
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

//delete like
router.patch("/likedelete/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const deletelike = [uid, type]
    declarations.updateOne({_id: id}, { $pull: {like: deletelike} })
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

// Find likes list
router.get("/dislikes/:id", (req, res, next) => {
  const id = req.params.id
  declarations.find({_id: {id}.id})
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
router.patch("/dislike/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const newdislike = [uid, type]
    declarations.updateOne({_id: id}, { $push: {dislike: newdislike} })
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

//delete like
router.patch("/dislikedelete/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type

  const deletedislike = [uid, type]
    declarations.updateOne({_id: id}, { $pull: {dislike: deletedislike} })
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


// Find commentaires list
router.get("/comments/:id", (req, res, next) => {
  const id = req.params.id
  declarations.find({_id: {id}.id})
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
// Find feedbacks list
router.get("/feedbacks/:id", (req, res, next) => {
  const id = req.params.id
  declarations.find({_id: {id}.id})
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
//add comments

router.patch("/comment/:id/:uid/:type", (req, res, next) => {
  const id = req.params.id
  const uid = req.params.uid
  const type = req.params.type
  const contenu = req.body.contenu
  const newcomment = [uid, type, contenu]
    declarations.updateOne({_id: id}, {$push: {commentaires: {user:uid,type: type, contenu: contenu, date: Date()}} })
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

//add feedback
router.patch("/newfeedback/:id/:userId/:userType/", (req, res, next) => {
  const id = req.params.id
  const userId = req.params.userId
  const userType = req.params.userType
  const userfeedback = req.body.contenu
  //const date = req.params.date
  const feedback = {user: userId,type: userType,contenu: userfeedback, date: Date()}

  declarations.updateOne({_id: id}, { $push: {feedbacks: feedback} })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Nouveau feedback ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
      //res.status(404).send(err.message);
   })

  
});

module.exports = router;