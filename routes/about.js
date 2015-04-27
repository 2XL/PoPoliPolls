var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /*
    response attributes available

    res.writeHead
    res.set
    res.status
    res.type -> Content-Type
     */
    var viewArgs = {
        title: "About"
    }
    res.render('about', viewArgs);
});

module.exports = router;
