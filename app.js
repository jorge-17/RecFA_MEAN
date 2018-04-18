var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var cFA = require('./expressRouter/servicioRoutes');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://172.16.110.26/ControlFA', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://Jorge Rodarte:roma1993_@ds247449.mlab.com:47449/recolecciones-fa', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/serv', express.static(path.join(__dirname, 'dist')));
app.use('/serv', cFA);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
