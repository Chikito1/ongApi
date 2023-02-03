var express = require('express');
var router = express.Router();
const domaineCltr = require('../controllers/domaine')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}])


router.route('/').get(domaineCltr.getAll)
router.route('/:id').get(domaineCltr.getOne)


module.exports = router


