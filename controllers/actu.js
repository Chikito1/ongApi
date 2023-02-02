const actucltr = require('../models/actu');


const createActu = ((req, res) => {
    const newArticle = {
        id : actucltr.length +1,
        titre: req.body.titre,
        sous_titre: req.body.sous_titre,
        contenu: req.body.contenu,
        image_url: req.body.image_url,
        date_ajout: req.body.date_ajout,
        auteur: req.body.auteur

    }
    actu.push(newArticle)
    res.status(201).json(newArticle)
})

