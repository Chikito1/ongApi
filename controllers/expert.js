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
}

exports.getOneExpert = (req, res)=>{
    return res.status(200).json({'data':"no data"})
}
