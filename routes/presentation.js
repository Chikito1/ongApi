var express = require('express');
var router = express.Router();
const presentCltr = require('../controllers/presentation')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}])

router.route('/').get(presentCltr.getAllPresent)

router.route('/:id').get(presentCltr.getOnePresent)


module.exports = router;