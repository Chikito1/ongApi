var router = require('express').Router();

const actucltr = require('../controllers/actu')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}]);

router.route('/').get(actucltr.readAllactu).post(upload, actucltr.createActu)

router.route('/:id').get(actucltr.readOneactu)


module.exports = router;
