var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res, next) {
    // res.send('Hello Express!')
    res.render('index', { title: 'Express' });
  })
  .get('/other', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('layout', { title: 'demo' })
  })

module.exports = router;
