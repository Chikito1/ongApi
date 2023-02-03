const Domaine = require('../models/domaine');


exports.getAll = (req, res, next)=>{
    Domaine.find().then(
        (domaine) => {
          res.status(201).json(domaine);
        }
      ).catch(
        (error) => {
          res.status(403).json({
            error: error
          });
        }
      ); 
}

exports.getOne = (req, res)=>{
    return res.status(201).json({})
}
