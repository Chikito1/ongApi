var express = require('express');
var router = express.Router();
const actucltr = require('../controllers/actu')

const upload = require('../middlewares/uploader')

router.route('/').get(actucltr.readAllactu).post(upload, actucltr.createActu)

router.route('/:id').get(actucltr.readOneactu)


module.exports = router;
