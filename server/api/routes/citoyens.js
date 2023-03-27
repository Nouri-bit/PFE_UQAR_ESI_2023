const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Pool = require('pg').Pool
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const pool = require('../../pg');
const bcrypt = require('bcrypt');
router.get('/', async(req, res) => {
    const citizens = await pool.query('SELECT * FROM citoyen')
    console.log(citizens.rows);
    res.json(citizens)  
})
router.get('/:idcitoyen', async(req, res) =>{
    const citizen = await pool.query('select * from citoyen where idcitoyen =$1', [req.params.idcitoyen]) 
    console.log(citizen.rows)
    console.log(citizen.rows[0].idcitoyen)
    res.json(citizen.rows)  
})
router.patch('/:idcitoyen', async(req, res) =>{
    
    const citizen = await pool.query('UPDATE citoyen SET nom = $1  WHERE idcitoyen =$2', [req.body.nom, req.params.idcitoyen]) 
    res.json(citizen)
})

router.post('/signup', async(req, res)=>{
     const exist = await pool.query('select * from citoyen WHERE mail =$1', [req.body.mail])
     if (exist.rowCount >= 1) {
        console.log("existe");
        return res.status(409).json({
            message: "Ce Mail existe déja ! "
        });
    } else {
        bcrypt.hash(req.body.mdp, 10, async (err, hash) => {
            if (err) {
                console.log("hash");
                return res.status(500).json({
                    error:  err
                });
            } else { 
            resultat= await pool.query('insert into citoyen(idcitoyen, mail, telephone, mdp) values($1, $2, $3, $4)', [req.body.idcitoyen, req.body.mail, req.body.telephone, hash]);
            res.status(201).json({message: "Utilisateur créé avec succès"});
            console.log(resultat);
            console.log("c bon");
        }})
            
                
            }
        
        
        
    
})
//router.delete('/:idcitoyen', async(req, res)=>{
    //const supression = await pool.query('select * from citoyen, publication, position WHERE citoyen.idcitoyen=publication.idcitoyen and publication.idpublication=position.idpublication and citoyen.idcitoyen= $1', [req.params.idcitoyen]);
    //res.json(supression)
//})
module.exports = router;