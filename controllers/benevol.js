const Benevole = require('../models/contribution/benevole')

exports.getAllBenevol = async (req, res)=>{
    Benevole.find()
    .then(data => res.status(201).json({error:false, data}))
    .catch(error=>res.status(403).json({error:true, msg:error.message}))
}

exports.getOneBenevol = async (req, res)=>{
    Benevole.findOne({_id:req.params.id})
    .then(data=> res.status(201).json({error:false, data}))
    .catch(error=> res.status(403).json({error:true, msg:error.message}))
}

exports.createBenevol = async  (req, res)=>{
    delete req.body._id;
    const benevol = req.body

    const newBenevole = Benevole({
        ...benevol})

    newBenevole.save()
    .then(data => {res.status(201).json({error:false, data})})
    .catch(error => res.status(403).json({error:true, msg:error.message}))
}


exports.updateBenevole =async (req, res)=>{
    const benevole = req.body

 Benevole.updateOne({_id: req.params.id}, {...benevole, _id: req.params.id})
        .then(async()=>{
            let data = await Benevole.findOne({_id:req.params.id})
            res.status(201).json({error:false, data: data})
        })
        .catch(error => res.status(500).json({error:true,msg:error.message}))
}

exports.deleteBenevole = async (req, res)=>{
    const {id} = req.params;

    const benevole = await Benevole.findById(id);

    if(!benevole){
        return res.status(404).json({error:true, msg: 'objet non trouvé !'});
    }

    Benevole.deleteOne({_id:id})
        .then(()=>res.status(200)
            .json({error:false, msg:'objet benevole suprimé !'}))
        .catch(error => res.status(404).json({error:true, msg:error.message}))
}