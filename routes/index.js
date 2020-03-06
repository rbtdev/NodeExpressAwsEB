var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: process.env.MY_ENV_VAR || 'dev' });
});

module.exports = router;
