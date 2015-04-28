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
    var queryTwitter = {
        query: "#hashTag",
        count: 10
    }

    function syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    var twitter = require('../lib/twitter/twitter.js')({
        consumerKey: credentials.twitter.ckey,
        consumerSecret: credentials.twitter.csecret
    });
    // constructor del aplicatiu twitter

    // query sobre algun hashtag
    twitter.search(queryTwitter.query, queryTwitter.count, function (result) {
        // tweets will be in results.statuses
        queryTwitter.result = result.statuses;


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
                mongodb: queryResult,
                twitter: queryTwitter
            };
            if (req.query.test !== undefined) {
                viewArgs.test = req.query.test;
                viewArgs.baseUrl = req.baseUrl.substring(1);
            }
            console.log(viewArgs);
            res.render('twitter', viewArgs);


        });


    });


    //mongoose.connect(credentials.mongo.url, opts)


});

module.exports = router;
