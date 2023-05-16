const mongoose = require('mongoose');
const formulaireSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    datecreation: {type: Date, required: true},
    datefin: {type: Date, required: true},
    facilitateurId: {type: String, required: true},
    status: {type: String, required: true},
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    url: {type: String, required: true},
    reponsesurl: {type: String, required: true},
    nombrereponses: Number
});
module.exports= mongoose.model('Formulaire', formulaireSchema);