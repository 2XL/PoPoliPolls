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


var viewArgs = {
    title: "Index",
    fortunes: library.getFortune()
}


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', viewArgs);
});

module.exports = router;
