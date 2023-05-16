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
const Formulaire= require('../models/form')
router.get("/all", (req, res, next) => {
    Formulaire.find({status: "En cours"})
    .select("_id datecreation datefin facilitateurId status titre contenu url reponsesurl nombrereponses")
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
            url: doc.url, 
            reponsesurl: doc.reponsesurl, 
            nombrereponses: doc.nombrereponses
          };
        })
      };
      res.status(200).json(response);
    })
});
router.patch("/comments/:id", (req, res, next) => {
    const id = req.params.id
    Formulaire.findOneAndUpdate({$and: [{_id: id}]}, 
        { $push:{choix:{ch:"Contre", users:["6422e0277fa252d4f2e8e632"]}} }, {new:true,upsert: true,
            rawResult: true}
    )
      .select("choix")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          choix: docs
            
         
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
//add un 
router.patch("/remplir/:id/:uid", (req, res, next) => {
    const id = req.params.id
    const uid = req.params.fid
   //const choixx = req.body.ch
    
    //const newremplissag = [uid]
      Formulaire.updateOne({$and: [{_id: id}, {choix: {  $elemMatch: { ch: req.body.ch } }}]}, { $push:{"choix":uid } })
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
      Formulaire.updateOne({_id: id}, { $pull:{} })
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