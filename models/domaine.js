const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const prestationSchema = mongoose.Schema({
    titre : reqStr,
    description: reqStr,
    image_url: reqStr, 
    date_ajout: mongoose.SchemaTypes.date_ajout,
    categories: reqStr
},
 {timestamps: true}
)

module.exports = ('Prestation', prestationSchema);

