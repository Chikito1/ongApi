const Actu = require('../models/actu');


exports.createActu = (req, res) => {
    delete req.body._id;

    const newArticle = ({
        ...req.body,
        image_url: req.body.image_url})
    newArticle.save().then(data => {res.status(201).json({data});
    })
    .catch(error => res.status(403).json({error}))
    
}

exports.readOneactu = (req, res)=>{
    Actu.findOne({_id:req.params.id})
        .then(data=> res.status(201).json({data}))
        .catch(err=> res.status(403).json({err}))
}

exports.readAllactu = (req, res)=>{
    Actu.find()
    .then(data => res.status(201).json({data}))
    .catch(error=>res.status(403).json({error}))   
}

exports.updateActu = (req, res)=>{
    Actu.updateOne({_id: req.params.id},
        {...req.body, _id: req.params.id})
        .then(user => res.status(httpStatus.OK).json({user}))
        .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error}))
}

exports.deleteActu = async (req, res)=>{
    const {id} = req.params;

    const actu = await Actu.findById(id);

    if(!actu){
        return res.status(404).json({message: 'article non trouvé !'});
    }

    Actu.deleteOne({_id:id})
        .then(()=>res.status(200).json({message:'acticle supprimé'}))
        .catch(error => res.status(httpStatus.NOT_FOUND).json({error}))
}