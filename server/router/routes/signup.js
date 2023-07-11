var express = require('express');
var router = express.Router();

/* GET home page. */
// Setup the Route
router.post('/', function (req, res) {

    // show the request body in the command line
    console.log(req.body);

    // return a json response to angular
    res.json({
        'msg': 'success!'
    });
});

router.post('/special', function (req, res) {
    res.json({
        'msg': 'this was posted to /signup/special'
    });
});

module.exports = router;
