var express = require('express');
var router = express.Router();
const benevolCltr = require('../controllers/benevol')



router.route('/')
    .get(benevolCltr.getAllBenevol)
    .post(benevolCltr.createBenevol)
    

router.route('/:id')
    .get(benevolCltr.getOneBenevol)
    .put(benevolCltr.updateBenevole)
    .delete(benevolCltr.deleteBenevole)


module.exports = router ;