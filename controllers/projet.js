const Projet  = require('../models/presentation/projet');


exports.getAllProjet = (req, res)=>{
    Projet.find().then(
        (projet) => {
          res.status(201).json(projet);
        }
      ).catch(
        (error) => {
          res.status(403).json({
            error: error
          });
        }
      ); 
}

exports.getOneProjet  = (req, res)=>{
    return res.status(200).json({'data':"no data"})
}


module.exports = router;