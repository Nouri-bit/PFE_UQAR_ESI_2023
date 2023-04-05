const mongoose = require('mongoose');
const PublicationSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    contenu:String, 
    like: [],
    dislike: [], 
    typepost: String,
    commentaires: [ [] ],
    feedbacks: [ [] ],
    datepost: String,
    userId: String,
    position: String,
    semantique: String,
    spatial: String,
    temporel: String,
    images: [],
    locstamp: String
});
module.exports= mongoose.model('Publication', PublicationSchema);