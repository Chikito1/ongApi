var createError = require('http-errors');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const adminRouter = require("./routes/admin.router")
const actuRouter = require('./routes/actu')
const benevoleRouter = require('./routes/benevol')
const domaineRouter = require('./routes/domaine')
const donateurRouter = require('./routes/donateur')
const expertRouter = require('./routes/expert')
const presentationRouter = require('./routes/presentation')
const projetRouter = require('./routes/projet')

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  mongoose.set('strictQuery', false);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
  res.render('error');
});

app.use(adminRouter)

module.exports = app;
