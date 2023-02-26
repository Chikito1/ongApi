const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const articleSchema = mongoose.Schema({
    titre : reqStr,
    sous_titre : reqStr,
    contenu: reqStr,
    image_url:{type: String, required: false, default:"avatar.jpg"}, 
    date_ajout: {type: Date, required: false, default:"02-26-2023"},
    auteur: reqStr
})

module.exports = mongoose.model('Article', articleSchema);

