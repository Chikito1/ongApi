var express = require('express');
var router = express.Router();
const domaineCltr = require('../controllers/domaine')

const upload = require('../middlewares/uploader')


router.route('/').get(domaineCltr.getAll)
router.route('/:id').get(domaineCltr.getOne)


module.exports = router


