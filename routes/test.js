var express = require('express');
var router = express.Router();

// libs

var library = require('../lib/library/library.js');
/*
 response attributes available

 res.writeHead
 res.set
 res.status
 res.type -> Content-Type
 */

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(Object.keys(req));
    /*
     Object.keys(req).forEach(function(item){
     console.log(item)
     console.log("<------->")
     console.log(req[item]);
     })
     */
    var viewArgs = {
        title: "Test",
        fortunes: library.getFortune()

    }
    if (req.query.test !== undefined) {
        console.log("TEST: " + req.query.test);
        viewArgs.test = req.query.test;
        viewArgs.baseUrl = req.baseUrl.substring(1)
    }
    res.render('test', viewArgs);

});

module.exports = router;
