var express = require('express');
var router = express.Router();
var fruits = require("../fruits.json"); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jsondata', { title: 'Fruits', videodata: fruits });
});
module.exports = router;