const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reqStr = {type:String, require: true};

const benevoleSchema = mongoose.Schema({
    nom: reqStr,
    prenoms : reqStr,
    adresse: reqStr, 
    email: {type:String, require: true, unique : true },
    tel : {type : String, require: true}
})

benevoleSchema.plugin(uniqueValidator);
module.exports =mongoose.model('Benevole', benevoleSchema);
