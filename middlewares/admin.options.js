const mongoose = require('mongoose')
const AdminJS = require("adminjs")




const Domaine = require("../models/domaine")
const Projet = require("../models/presentation/projet")
const Presentation = require("../models/presentation/presentation")
const Expert = require("../models/presentation/expert")
const Donateur = require("../models/contribution/donateur")
const Benevole = require("../models/contribution/benevole")
const Utilisateur = require ("../models/Utilisateur.model")
const Actualite = require("../models/actu")
const {actuAdminOptions, actuUploadFeature} = require('./actu.admin-options')
const {expertAdminOptions, expertUploadFeature} = require('./expert.admin-options')


const adminOptions = {
    databases: [mongoose],
    rootPath: '/api/admin',
    logoutPath: '/admin/logout',
    loginPath: '/admin/login',
    branding: {
        logo: "../Actualites/logo.jpg",
        favicon: "../Actualites/logo.jpg",
        companyName: "ONG AEIE",
        softwareBrothers: false,
        withMadeWithLove: false 
    },
    resources: [
        {
            resource: Actualite,
            options: actuAdminOptions,
            features: actuUploadFeature
        },
        {
            resource: Expert,
            options: expertAdminOptions,
            features: expertUploadFeature
        },
       
    ]
}

module.exports = adminOptions