
 const imgUploadHandler = (req, res, next) =>{
    if(req.files){
        Object.keys(req.files).forEach(key => {
            if(req.files[key][0].filename){
                req.body[key]  ='images/' + req.files[key][0].filename;
            }
        })
    }
    next();
}

module.exports = imgUploadHandler