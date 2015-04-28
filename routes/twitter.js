var express = require('express');
var router = express.Router();
var credentials = require('../credentials.js');
var Person = require('../models/person.js');
/* GET home page. */


router.get('/', function (req, res, next) {
    /*
     response attributes available

     res.writeHead
     res.set
     res.status
     res.type -> Content-Type
     */


    //mongoose.connect(credentials.mongo.url, opts)

    var queryResult;

    Person.find({gender: 'F'}, function (err, persons) {
        console.log(persons);
        queryResult = {
            persons: persons.map(function (p) {
                return {
                    name: p.name,
                    hit: p.hit
                }
            })
        };


        // callback
        console.log("CALLBACK");
        var viewArgs = {
            title: "Twitter",
            content: queryResult
        };
        if (req.query.test !== undefined) {
            viewArgs.test = req.query.test;
            viewArgs.baseUrl = req.baseUrl.substring(1);
        }
        console.log(viewArgs);
        res.render('twitter', viewArgs);


    });


});

module.exports = router;
