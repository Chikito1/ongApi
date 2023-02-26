const Article = require('../models/actu')

exports.createActu = (req, res) => {
    delete req.body._id;
    const actu = req.body
    file="avatar.jpg"
    if(req.files){
        Object.keys(req.files).forEach(key => {
            if(req.files[key][0].filename){
                file ='images/' + req.files[key][0].filename;
            }
        })
    }

    const newArticle = Article({
        ...actu,
        image_url: file})
    newArticle.save().then(data => {res.status(201).json({data});
    })
    .catch(error => res.status(403).json({error}))
    
}

exports.readOneactu = (req, res)=>{
    Article.findOne({_id:req.params.id})
        .then(data=>{
        const  {_id, titre, sous_titre, contenu, auteur,image_url, date_ajout} = data

            res.status(201).json({error:false, data: {_id, titre, sous_titre, contenu, auteur,image_url, date_ajout, }})
        })
        .catch(err=> res.status(403).json({error:true, msg: err.message}))
}

exports.readAllactu = (req, res)=>{
    Article.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))   
}

exports.updateActu =async (req, res)=>{
    const actu = req.body
    let file ="avatar.jpg"
    if(req.files){
        Object.keys(req.files).forEach(key => {
            if(req.files[key][0].filename){
                file ='images/' + req.files[key][0].filename;
            }
        })
    }

    Article.updateOne({_id: req.params.id},
        {...actu, image_url:file, _id: req.params.id})
        .then(async()=>{
            let data = await Article.findOne({_id:req.params.id})
            const  {_id, titre, sous_titre, contenu, auteur,image_url, date_ajout} = data
            res.status(201).json({error:false, data: {_id, titre, sous_titre, contenu, auteur,image_url, date_ajout}})
        })
        .catch(error => res.status(500).json({error}))
}

exports.deleteActu = async (req, res)=>{
    const {id} = req.params;

    const actu = await Article.findById(id);

    if(!actu){
        return res.status(404).json({error:true, msg: 'article non trouvé !'});
    }

    Article.deleteOne({_id:id})
        .then(()=>res.status(200).json({error:false, msg:'acticle supprimé'}))
        .catch(error => res.status(404).json({error:true, msg:error}))
}