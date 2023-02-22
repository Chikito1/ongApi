var express = require('express');
var router = express.Router();
const projetCltr = require('../controllers/projet')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}])

router.route('/').get(projetCltr.getAllProjet)
router.route('/:id').get(projetCltr.getOneProjet)


module.exports = router;