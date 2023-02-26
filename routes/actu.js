var express = require('express');
var router = express.Router();
const actucltr = require('../controllers/actu')

const upload = require('../middlewares/uploader').fields([{name:"image_url", maxCount:1}]);
const imgUploadHandler = require('../middlewares/img.upload.hanlder')

router.route('/')
    .get(actucltr.readAllactu)
    .post(upload,imgUploadHandler, actucltr.createActu)

router.route('/:id')
    .get(actucltr.readOneactu)
    .put(upload, imgUploadHandler, actucltr.updateActu)
    .delete(actucltr.deleteActu)


module.exports = router;
