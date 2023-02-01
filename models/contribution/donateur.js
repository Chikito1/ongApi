const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reqStr = {type:String, require: true};

const donateurSchema = mongoose.Schema({
    nom: reqStr,
    prenoms: reqStr,
    email: {type:String, require: true, unique : true },
    pays: reqStr, 
    montant:{type: Number, require:true},
    ref:{type:String, require: true, unique : true },
    date: reqStr,
    statut: reqStr
    
   
})

donateurSchema.plugin(uniqueValidator);
module.exports = ('Donateur', donateurSchema);