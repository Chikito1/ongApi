const Projet = require('../models/presentation/projet')

exports.getAllProjet = (req, res)=>{
    Projet.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
}

exports.getOneProjet  = (req, res)=>{
    Projet.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({data}))
    .catch(err=> res.status(403).json({err}))
}

