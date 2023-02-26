 mongoose = require('mongoose');
 
 const AppDB = class AppDB {
   

   static connect(uri){
    mongoose.set('strictQuery', true);

    mongoose.connect(uri,
        { useNewUrlParser: true,
            useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));
   }
}

module.exports = AppDB