var express = require('express');
var router = express.Router();
const benevolCltr = require('../controllers/benevol')

const upload = require('../middlewares/uploader')


router.route('/')
    .get(benevolCltr.getAllBenevol)
    

router.route('/:id').get(benevolCltr.getOneBenevol)



module.exports = router ;