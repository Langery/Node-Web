var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', (req, res, next) => {
    // res.send('Hello Express!')
    // set HTTP status code number
    res.status(200).render('index', { title: 'Express' });
  })
  .get('/other', (req, res, next) => {
    // res.send('respond with a resource');
    res.render('layout', { title: 'demo' })
  })
  .get('/one', (req, res, next) => {
    res.render('one', { title: 'one demo' })
  })

module.exports = router;
