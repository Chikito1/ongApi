const AdminJS = require("adminjs")
const uploadFeature = require("@adminjs/upload")

exports.expertAdminOptions = {
    properties : {
        recit: {
            type: "richtext",
            isVisible: {edit:true, filter: false, list: false, show: true}
        },
        photo: {
            isVisible: false
        },
        photoMini: {
            isVisible: false
        },
        updatedAt: {
            isVisible: {edit:false, filter: false, list: true}
        },
        createdAt: {isVisible: {edit:false, filter: false, list: true}},
    }
}

exports.expertUploadFeature = [
    uploadFeature({
        provider: {local: {bucket: "./uploads/images"}},
        properties: {
            key: "photo.key",
            mimeType: "photo.mime",
            bucket: "photo.bucket",
            file: `photo.file`,
            filename: 'photo.filename',
            filePath: `photo.filePath`,
            filesToDelete: `photo.filesToDelete`,
            size: `photo.size`,
        },
    }),
    uploadFeature({
        provider: {local: {bucket: "./uploads/images"}},
        properties: {
            key: "photoMini.key",
            mimeType: "photoMini.mime",
            bucket: "photoMini.bucket",
            file: `photoMini.file`,
            filename: 'photoMini.filename',
            filePath: `photoMini.filePath`,
            filesToDelete: `photoMini.filesToDelete`,
            size: `photoMini.size`,
        },
    })
]