const mongoose = require('mongoose');
const declarationSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    contenu:{type: String, required:true}, 
    like: [],
    dislike: [], 
    datedeclaration: {type: Date, required: true},
    userId: {type: String, required: true},
    userType: {type: String, required: true},
    images: [],
    commentaires: [],
    feedbacks: []
});
module.exports= mongoose.model('declaration', declarationSchema);