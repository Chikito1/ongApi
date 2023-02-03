var express = require('express');
var router = express.Router();
const expertCtrl = require('../controllers/expert')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}])


router.route('/').get(expertCtrl.getAllExpert)
router.route('/:id').get(expertCtrl.getOneExpert)


module.exports = router