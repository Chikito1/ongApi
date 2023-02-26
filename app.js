var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const AppDB = require('./database')

const adminRouter = require("./routes/admin.router")
const actuRouter = require('./routes/actu')
const benevoleRouter = require('./routes/benevol')
const domaineRouter = require('./routes/domaine')
const donateurRouter = require('./routes/donateur')
const expertRouter = require('./routes/expert')
const presentationRouter = require('./routes/presentation')
const projetRouter = require('./routes/projet')


  /**
   * database connexion
   * */ 
AppDB.connect(process.env.DB_URI)

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/actu", actuRouter)
app.use("/benevole", benevoleRouter)
app.use("/domaine", domaineRouter)
app.use("/donateur", donateurRouter)
app.use("/expert", expertRouter)
app.use("/presentation", presentationRouter)
app.use("/projets", projetRouter)
app.use("/admin", adminRouter)

app.get('/', (req, res) => {
  res.send('Welcome to API APP')
})
  
app.use(adminRouter)

// app.use(cookieParser());
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.json({error:true, "msg":res.locals.message});
});


module.exports = app;
