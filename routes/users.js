var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/iioo', function(req, res, next) {
  res.render('index', { title: 'useriiootest' });
});

module.exports = router;
