<<<<<<< HEAD
const Benevole = require('../models/contribution/benevole');


exports.getAllBenevol = async (req, res)=>{
    Benevole.find().then(
        (benevole) => {
          res.status(201).json(benevole);
        }
      ).catch(
        (error) => {
          res.status(403).json({
            error: error
          });
        }
      ); 

}
exports.getOneBenevol = async (req, res)=>{
    Benevole.findOne({
        _id: req.params.id
      }).then(
        (benevole) => {
          res.status(201).json(benevole);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
    };



exports.createBenevol = async  (req, res)=>{
    const newBenevol = {  
        nom: req.body.nom,
        prenoms: req.body.sous_titre,
        adresse: req.body.adresse,
        email: req.body.email,
        tel: req.body.tel,
    }
    newBenevol.save()
    .then((data)=> res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))
    
}



=======
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

>>>>>>> master
