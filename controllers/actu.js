const Actu = require('../models/actu');
const Actu = require('../models/actu');


exports.createActu = (req, res) => {
    const newArticle = new actucltr({
        titre: req.body.titre,
        sous_titre: req.body.sous_titre,
        contenu: req.body.contenu,
        image_url: req.body.image_url,
        date_ajout: req.body.date_ajout,
        auteur: req.body.auteur
    })
    newArticle.save()
        .then((data)=> res.status(201).json({data}))
        .catch(error=>res.status(403).json({error}))  
}

exports.readOneactu = (req, res)=>{
    return res.status(201).json({})
}

exports.readAllactu = (req, res)=>{
    Actu.find().then(
        (actu) => {
          res.status(201).json(actu);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      ); 
}