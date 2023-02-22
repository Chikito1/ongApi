const Domaine = require('../models/domaine');

<<<<<<< HEAD

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
=======
exports.getAll = (req, res)=>{
    Domaine.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
>>>>>>> master
}

exports.getOne = (req, res)=>{
    Domaine.findOne({_id:req.params.id})
        .then(data=> res.status(201).json({data}))
        .catch(err=> res.status(403).json({err}))
}
