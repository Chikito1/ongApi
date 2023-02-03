const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const articleSchema = mongoose.Schema({
    titre : reqStr,
    sous_titre : reqStr,
    contenu: reqStr,
    image_url: reqStr, 
    date_ajout: reqStr,
    auteur: reqStr
})

module.exports = mongoose.model('Article', articleSchema);

