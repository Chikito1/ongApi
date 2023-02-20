const mongoose = require('mongoose')
const AdminJS = require("adminjs")

const Utilisateur = require ("../models/Utilisateur.model")
const Actualite = require("../models/actu")
const {actuAdminOptions, actuUploadFeature} = require('./actu.admin-options')

const adminOptions = {
    databases: [mongoose],
    rootPath: '/api/admin',
    logoutPath: '/api/admin/logout',
    loginPath: '/api/admin/login',
    branding: {
        logo: "",
        favicon: "",
        companyName: "",
        softwareBrothers: false,
        withMadeWithLove: false 
    },
    resources: [
        {
            resource: Actualite,
            options: actuAdminOption,
            features: actuUploadFeature
        },
       
    ]
}

module.exports = adminOptions