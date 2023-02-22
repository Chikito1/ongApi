<<<<<<< HEAD
=======
const Donateur = require('../models/contribution/donateur')

exports.createDonateur = async (req, res)=>{
    delete req.body._id;

    const newDonateur = ({
        ...req.body})
    newDonateur.save().then(data => {res.status(201).json({data});
    })
    .catch(error => res.status(403).json({error}))
}

exports.getAllDonateur = (req, res)=>{
    Donateur.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
}


exports.getOneDonateur = (req, res)=>{
    Donateur.findOne({_id:req.params.id})
        .then(data=> res.status(201).json({data}))
        .catch(err=> res.status(403).json({err}))
}
>>>>>>> master
