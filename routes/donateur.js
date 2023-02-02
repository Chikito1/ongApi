var express = require('express');
var router = express.Router();
const donateurCltr = require('../controllers/donateur')

const upload = require('../middlewares/uploader')

router.route('/')
    .get(donateurCltr.getAllDonateur)
    .post(upload, donateurCltr.createDonateur)

router.route('/:id').get(donateurCltr.getOneDonateur)

module.exports = router
