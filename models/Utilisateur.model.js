const mongoose  = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const utilisateurSchema = mongoose.Schema({
    nom: {type: String, required: true},
    Prenoms: {type: String, required: true},
    email: {type: String, require: true, unique: true},
    motDePasseCrypte: {type: String, required: true},
    role: {type: String, enum: ["Webmaster"], required: true},
}, {
    timestamps: true
})

// utilisateurSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Utilisateurs', utilisateurSchema)