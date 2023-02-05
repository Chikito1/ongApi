const Presentation = require('../models/presentation/presentation')

exports.getAllPresent = (req, res)=>{
    Presentation.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
}

exports.getOnePresent = (req, res)=>{
    Presentation.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({data}))
    .catch(err=> res.status(403).json({err}))
}
