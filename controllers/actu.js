const Actu = require('../models/actu');

const getActu = ((req, res) =>{
    res.json(Actu)
})