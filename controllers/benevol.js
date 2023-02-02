exports.getAllBenevol = async (req, res)=>{
    return res.status(200).json({})
}
exports.getOneBenevol = async (req, res)=>{
    res.status(200).json({})
}

exports.createBenevol = async  (req, res)=>{
    return res.status(201).json({"data":"no"})
}



module.exports = router;