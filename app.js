console.log("app/start!");
var express = require('express');
var credentials = require('./credentials.js');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

// view Controllers
var routes = require('./routes/index');
var about = require('./routes/about');
var twitter = require('./routes/twitter');
var test = require('./routes/test');
/*
Route paths and Regular Expressions
+ -> /Jiii+nx               -> allow Jiiiiiiiiiiinx {i+ can be random length}
?
*
() -> /user(name)?          -> allow user and username
// -> javascript regexp
 */



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

var connectionString = credentials.mongo.url;
var Person = require('./models/person');
// Development Environments | Production Concerns


Person.find(function(err, person){
    if(person.length >= 2) return; // no result

    new Person({
        name: "Chenglong", // nom personal
        pparty: "CHENGLONG", // partit politic
        portfolio: "2XL", // url twitter
        rank: "3", // frequencia
        mark: "7", // qualificació
        ratio: "5", // ratio, in/out
        hit: "100000", // nombre total de hits
        tags: [1,2,3,4], // id de tots els twitts
        gender: "M"
    }).save();

    new Person({
        name: "Joanna", // nom personal
        pparty: "JOANNA", // partit politic
        portfolio: "RB", // url twitter
        rank: "1", // frequencia
        mark: "2", // qualificació
        ratio: "0", // ratio, in/out
        hit: "1000000", // nombre total de hits
        tags: [1,2,3,4,5,6,7,8], // id de tots els twitts
        gender: "F"
    }).save();

});


try {

    switch (app.get('env')) {
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
                path: __dirname + '/log/requests.log'
            }))
            break;
        default:
            throw new Error('Unknown execution environment: ' + app.get('env'));
            console.log("No logging plugin selected...");
            break;
    }
} catch (err) {
    console.log("DATABASE ERROR");
}


// TEST goes HERE ~~~>


// ROUTES goes HERE ---->

app.use('/', routes);   // default index , per defecte busca home || index
app.use('/about', about);
app.use('/test', test);
app.use('/twitter', twitter);
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