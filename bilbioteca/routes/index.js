var express = require('express');
let db = require('../utils/db.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pedro' });
});

module.exports = router;
