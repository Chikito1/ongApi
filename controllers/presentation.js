<<<<<<< HEAD
const Present = require('../models/presentation/presentation')


exports.getAllPresent = (req, res)=>{
    Present.find().then(
        (present) => {
          res.status(201).json(present);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      ); 
=======
const Presentation = require('../models/presentation/presentation')

exports.getAllPresent = (req, res)=>{
    Presentation.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
>>>>>>> master
}

exports.getOnePresent = (req, res)=>{
    Presentation.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({data}))
    .catch(err=> res.status(403).json({err}))
}
