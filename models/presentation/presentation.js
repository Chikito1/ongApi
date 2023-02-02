const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const presentationSchema = mongoose.Schema({
    titre : reqStr,
    sous_titre: reqStr,
    description: reqStr,
    image_url: reqStr, 
    date_ajout: reqStr
})

module.exports = ('Presentation', presentationSchema);