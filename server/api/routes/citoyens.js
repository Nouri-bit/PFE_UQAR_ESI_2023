const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const pool = require('../../pg');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const AuthCheck = require('../middlewares/auth-check');
const { route } = require("./sondages");
router.get('/',async(req, res) => {
    const citizens = await pool.query('SELECT * FROM citoyen')
    console.log(citizens.rows);
    res.json(citizens)  
})
router.get('/:idcitoyen',async(req, res) =>{
    const citizen = await pool.query('select * from citoyen where idcitoyen =$1', [req.params.idcitoyen]) 
    //console.log(citizen.rows)
   // console.log(citizen.rows[0].idcitoyen)
    res.json(citizen.rows[0])  
})
router.get('/f/:idcitoyen',async(req, res) =>{
    const citizen = await pool.query('select * from facilitateur where idfacilitateur =$1', [req.params.idcitoyen]) 
    //console.log(citizen.rows)
   // console.log(citizen.rows[0].idcitoyen)
    res.json(citizen.rows[0])  
})
router.patch('/:email', async(req, res) =>{
    
    const citizen = await pool.query('UPDATE citoyen SET sexe = $1, photoprofil = $2, datenaissance = $3  WHERE mail =$4', [req.body.sexe, req.body.photoprofil, req.body.datenaissance.substring(0,10), req.params.email]) 
    res.json(citizen)
})

router.post('/signup', async(req, res)=>{
     const exist = await pool.query('select * from citoyen WHERE mail =$1', [req.body.mail])
     if (exist.rowCount >= 1) {
       // console.log(res);
        return res.status(409).json({
            message: "Ce Mail existe déja ! "
        });
    } else {
        bcrypt.hash(req.body.mdp, 10, async (err, hash) => {
            if (err) {
               // console.log("hash");
                return res.status(500).json({
                    error:  err
                });
            } else { 
            resultat= await pool.query('insert into citoyen(idcitoyen,nom, prenom,  mail, telephone, mdp, datecreation2) values($1, $2, $3, $4, $5, $6, current_date)', [new mongoose.Types.ObjectId(),req.body.nom, req.body.prenom, req.body.mail, req.body.telephone, hash]);
            res.status(201).json({message: "Utilisateur créé avec succès"});
            //console.log(resultat);
            //console.log(res);
        }})
            
                
            }
        
        
        
    
})
//router.delete('/:idcitoyen', async(req, res)=>{
    //const supression = await pool.query('select * from citoyen, publication, position WHERE citoyen.idcitoyen=publication.idcitoyen and publication.idpublication=position.idpublication and citoyen.idcitoyen= $1', [req.params.idcitoyen]);
    //res.json(supression)
//})
router.post("/login", async(req, res) => {
    const exist = await pool.query('select * from citoyen WHERE mail =$1', [req.body.mail]).catch(err => {
        //console.log(err);
        res.status(500).json({
            error: err
        });
    });
    //console.log(exist);
    if (exist.rowCount < 1) {
        return res.status(401).json({
            message: "Échec de l'authentification"
        });
    }
    else{
    bcrypt.compare(req.body.mdp, exist.rows[0].mdp, (err, result) => {
        if (err) {
            return res.status(401).json({
                message: "Échec de l'authentification"
            });
        }
        else if (result) {
            
            const token = jwt.sign(
                {
                    mail: exist.rows[0].mail,
                    idcitoyen: exist.rows[0].idcitoyen
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
            );
            return res.status(200).json({
                message: "Accès réussi",
                token: token, 
                idcitoyen: exist.rows[0].idcitoyen
            });
        }
        res.status(401).json({
            message: "Échec de l'authentification"
        });
    });
}   
});

module.exports = router;