var express = require('express');
var router = express.Router();
const expertCtrl = require('../controllers/expert')

const upload = require('../middlewares/uploader')


router.route('/').get(expertCtrl.getAllExpert)
router.route('/:id').get(expertCtrl.getOneExpert)


module.exports = router