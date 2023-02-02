const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const expertSchema = mongoose.Schema({
    nom: reqStr,
    biographie : reqStr,
    image_url: reqStr, 
    date_ajout: reqStr
})

module.exports = ('Expert', expertSchema);