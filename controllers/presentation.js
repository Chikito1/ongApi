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
}

exports.getOnePresent = (req, res)=>{
    return res.status(200).json({})
}
