const Benevole = require('../models/contribution/benevole')

exports.getAllBenevol = async (req, res)=>{
    Benevole.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
}
exports.getOneBenevol = async (req, res)=>{
    Benevole.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({data}))
    .catch(err=> res.status(403).json({err}))
}

exports.createBenevol = async  (req, res)=>{
    delete req.body._id;

    const newBenevole = ({
        ...req.body})
    newBenevole.save().then(data => {res.status(201).json({data});
    })
    .catch(error => res.status(403).json({error}))

}

