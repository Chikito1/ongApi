const actucltr = require('../models/actu');


exports.createActu = (req, res) => {
    const newArticle = {
        titre: req.body.titre,
        sous_titre: req.body.sous_titre,
        contenu: req.body.contenu,
        image_url: req.body.image_url,
        date_ajout: req.body.date_ajout,
        auteur: req.body.auteur
    }
    newArticle.save()
        .then((data)=> res.status(201).json({data}))
        .catch(error=>res.status(403).json({error}))  
}

exports.readOneactu = (rq, res)=>{
    return res.status(201).json({})
}

exports.readAllactu = (rq, res)=>{
    return req.status(201).json({'detail':"acture create"})
}