const Benevole = require('../models/contribution/benevole');
const fs = require('fs');


exports.create = (req, res, next) => {
  const benevoleObject = JSON.parse(req.body.benevole);
  delete benevoleObject._id;
  delete benevoleObject._userId;
  const benevole = new Benevole({
      ...benevoleObject,
      userId: req.auth.userId
  });

  thing.save()
  .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
  .catch(error => { res.status(400).json( { error })})
};

exports.createBenevole = (req, res, next) => {
  const benevole = new Benevole({
    nom: req.body.nom,
    prenoms: req.body.prenoms,
    adresse: req.body.adresse,
    email: req.body.email,
    tel: req.body.tel,
    userId: req.body.userId
  });
  benevole.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
