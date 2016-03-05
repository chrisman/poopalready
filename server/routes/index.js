var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('please read the documentation for instructions on how to use the api');
});

module.exports = router;
