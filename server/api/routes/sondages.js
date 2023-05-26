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
const Sondage= require('../models/sondage')
//add nouveau sondage
router.post("/newpoll/:sondagetitleinput/:sondageDescriptioninput/:choix/:datecreation/:datefin/:userId", (req, res, next) => {
  const titre = req.params.sondagetitleinput
  const description = req.params.sondageDescriptioninput
  const choix = req.params.choix
  const datecreation = req.params.datecreation
  const datefin = req.params.datefin
  const userId = req.params.userId

  //console.log(choix)
  
  let choixtable = []
  let newchoix = {}
  let listchoix = []

  //console.log(choix)
  choixtable = choix.split(",");

  // Iterating over the array and printing
  choixtable.forEach(element => {
     //console.log(element);
     newchoix = {
      ch: element,
      users: []
     },
     listchoix.push(newchoix)
  });

  //console.log(listchoix)

  const newsondage = {
    _id: new mongoose.Types.ObjectId(),
    datecreation: datecreation,
    datefin: datefin,
    facilitateurId: userId,
    status: 'En cours',
    titre: titre,
    contenu: description,
    choix: listchoix,
    nombrevotes: 0
  }
  //console.log(declaration)
  Sondage.create(newsondage)
  
  console.log('test new poll')
});
router.get("/all", (req, res, next) => {
    Sondage.find({status: "En cours"})
    .select("_id datecreation datefin facilitateurId status titre contenu choix nombrevotes")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            _id: doc._id,
            datecreation: doc.datecreation, 
            datefin: doc.datefin, 
            facilitateurId: doc.facilitateurId, 
            status:doc.status, 
            titre:doc.titre, 
            contenu: doc.contenu,   
            choix: doc.choix, 
            nombrevotes: doc.nombrevotes
          };
        })
      };
      res.status(200).json(response);
    })
});
router.patch("/comments/:id/:uid", (req, res, next) => {
  const id = req.params.id
  const choi= req.body.ch
  const uid = req.params.uid
  //var cho="Jardin"
  Sondage.updateOne({$and: [{_id: id}]}, {$push:{"choix.$[si].users":uid}, $inc:{nombrevotes:1 } }, {"arrayFilters" :[ { "si.ch" :choi} ]})
    .select("choix")
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'choix ajouté',
          
      });
    }).catch(err => {
      if(res.status == 404){
        console.log(err.message)
      }
   })
});

//add un 
router.patch("/remplir/:id/:uid", (req, res, next) => {
    const id = req.params.id
    const uid = req.params.uid
   //const choixx = req.body.ch
    
    //const newremplissag = [uid]
      Sondage.updateOne({$and: [{_id: id}]}, { $push:{"choix.users":uid } })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'sondage ajouté',
            
        });
      }).catch(err => {
        if(res.status == 404){
          console.log(err.message)
        }
     })
  
  });
  //add un 
router.patch("/supprimer/:id/:uid/:i/", (req, res, next) => {
    const id = req.params.id
    const uid = req.params.fid
   const ii = req.params.i
  
    //const newremplissag = [uid]
      Sondage.updateOne({_id: id}, { $pull:{} })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'sondage supprimé',
            
        });
      }).catch(err => {
        if(res.status == 404){
          console.log(err.message)
        }
     })
  
  });
module.exports = router;