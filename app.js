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

// BD geos HERE +++>
var mongoose = require('mongoose');
var opts = {
    server: {
        socketOptions: {keepAlive: 1}
    }
};
var connectionString = "mongodb://test:test@ds063859.mongolab.com:63859/torrentjs";
// Development Environments | Production Concerns
switch (app.get('env')){
    // default: development
        // to switch it
        // export NODE_ENV = production  // permanent
        // NODE_ENV=production node app.js // temporal
    case 'development':
        // compact, colorful dev logging
        mongoose.connect(connectionString, opts);
        app.use(require('morgan')('dev'));
        break;
    case 'production':
        mongoose.connect(connectionString, opts);
        app.use(require('express-logger')({
            path: __dirname +'/log/requests.log'
        }))
        break;
    default:
        console.log("No logging plugin selected...");
        break;
}






// TEST goes HERE ~~~>


// ROUTES goes HERE ---->

app.use('/', routes);   // default index , per defecte busca home || index
app.use('/about', about);
app.use('/test', test);
//when -> url & then -> controller


// disible information - security reasons (server profiling)
// app.disable('x-powered-by');
app.get('/headers', function (req, res) {
    res.set('Content-Type', 'text/plain');
    console.log('Hello Headers');
    console.log(Object.keys(req.headers));
    var s = '';
    for (var name in req.headers)
        s += name + ': ' + req.headers[name] + '\n'
    console.log(s);
    res.send(s);
});

app.get('/greeting', function (req, res) {
    res.render('about', {
        title: 'welcome',
        style: req.query.style
        //userid: req.cookie.userid,
        // username: req.session.username
    })
});


app.post('/process', function (req, res) {
    console.log('Received contact from ' + req.body.name + '#' + req.body.email);
    // do something with the contact
    // call it with a bot
    // store it in the database
    try {
        // do some magic
        console.log('do magic!');
        /*
         return res.xhr ? res.render({success: true}) :
         res.redirect(303, 'success');
         */
    } catch (e) {
        console.log('do evil!!!');
        /*
         return res.xhr ? res.json({failed: 'failed'}) :
         res.redirect(303, '/failed');
         */
    }

    return res.redirect(303, '/');
    // callback or notificate the user that his query was submited

});


console.log("ENVIRONMENT SETTING: " + app.get('env'));


// catch 404 and forward to error handler (middleware)
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// LISTENERS ONMIPRESENTS

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