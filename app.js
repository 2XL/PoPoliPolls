console.log("app/start!");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// view Controllers
var routes = require('./routes/index');
var about = require('./routes/about');
var test = require('./routes/test');

// APP server boilerplate framework

var app = express();

/*
 var diskdb = require('diskdb');
 var transformers = require('transformers');
 var nib = require('nib');
 var stylus = require('stylus');
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, 'views/template'));

app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
// equivalent
app.use(express.static(__dirname + '/public'));


// TEST goes HERE ~~~>


// ROUTES goes HERE ---->

app.use('/', routes);   // default index , per defecte busca home || index
app.use('/about', about);
app.use('/test', test);
//when -> url & then -> controller


console.log("ENVIRONMENT SETTING: " + app.get('env'));


// catch 404 and forward to error handler (middleware)
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// ERROR handlers
// development error handler (middleware)
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log("DEVELOPMENT ERROR!");
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// PRODUCTION error handler (middleware)
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log("PRODUCTION ERROR!!!!");
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

console.log("app/end!");
console.log('Server stareted on localhost:3000; press Ctrl-C to terminate...');