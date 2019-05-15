var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('首页')
  res.render('layout', { title: '首页' })
});

module.exports = router;
