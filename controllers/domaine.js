const Domaine = require('../models/domaine');

exports.getAll = (req, res)=>{
    Domaine.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
}

exports.getOne = (req, res)=>{
    Domaine.findOne({_id:req.params.id})
        .then(data=> res.status(201).json({data}))
        .catch(err=> res.status(403).json({err}))
}
