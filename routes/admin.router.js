const AdminJs = require('adminjs')
const AdminExpress = require('@adminjs/express')
const AdminMongoose = require('@adminjs/mongoose')
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const router = require("express").Router()

const adminOptions = require("../middlewares/admin.options")
const userCtrl = require("../controllers/user.ctrl")

AdminJs.registerAdapter (AdminMongoose)

router.use((req, res, next) => {
  if (req.session && req.session.admin) {
    req.session.adminUser = req.session.admin
    next()
  } else {
    res.redirect(adminJs.options.loginPath)
  }
})

const adminJs = new AdminJs(adminOptions)

const adminRouter = AdminExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: userCtrl.login,
    cookieName: "ONG AEIE",
    cookiePassword: "Dieunestpasmechant"
}, 
null, {
    store: new MongoDBStore({
        uri: "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",
        expires: 1000 * 60 * 60 * 24 * 7,
        connectionOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000
          }
    }),
    resave: true,
    saveUninitialized:true
})

module.exports = adminRouter