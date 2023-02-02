const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const projetSchema = mongoose.Schema({
    titre : reqStr,
    description: reqStr,
    image_url: reqStr, 
    date_ajout: reqStr
})

module.exports = ('Projet', projetSchema);