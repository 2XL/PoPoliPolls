var express = require('express');
var router = express.Router();


/*
 response attributes available

 res.writeHead
 res.set
 res.status
 res.type -> Content-Type
 */

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

var viewArgs = {
    title: "Index",
    fortunes: fortunes[Math.floor(Math.random() * fortunes.length)]
}


/* GET home page. */
router.get('/', function (req, res, next) {


    res.render('index', viewArgs);

});

module.exports = router;
