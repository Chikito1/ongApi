const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const prestationSchema = mongoose.Schema({
    titre : reqStr,
    description: reqStr,
    image_url: reqStr, 
    date_ajout: reqStr,
    catégories: reqStr
})

module.exports =mongoose.model('Prestation', prestationSchema);

