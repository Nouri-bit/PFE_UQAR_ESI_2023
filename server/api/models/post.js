const mongoose = require('mongoose');
const PublicationSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    contenu:{type: String, required: true}, 
    like: [],
    dislike: [], 
    typepost: {type: [], required: true},
    commentaires: [],
    feedbacks: [],
    datepost: {type: Date, required: true},
    userId: {type: String, required: true},
    position: [],
    semantique: [],
    spatial: [],
    temporel: [],
    images: [],
    locstamp: String,
    etat: {type: Boolean, required: true}
});
module.exports= mongoose.model('Publication', PublicationSchema);