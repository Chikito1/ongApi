<<<<<<< HEAD
const Expert = require('../models/presentation/expert');

exports.getAlleExpert = (req, res)=>{
    
    Expert.find().then(
        (expert) => {
          res.status(201).json(expert);
        }
      ).catch(
        (error) => {
          res.status(403).json({
            error: error
          });
        }
      ); 
=======
const Expert = require('../models/presentation/expert')

exports.getAllExpert = (req, res)=>{
    Expert.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
>>>>>>> master
}

exports.getOneExpert = (req, res)=>{
    Expert.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({data}))
    .catch(err=> res.status(403).json({err}))
}
