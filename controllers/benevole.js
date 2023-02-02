const benevole = require('../models/contribution/benevole')


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

