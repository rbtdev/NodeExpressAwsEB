var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let { NODE_ENV, 
    RDS_DB_NAME,
    RDS_USERNAME,
    RDS_PASSWORD,
    RDS_HOSTNAME,
    RDS_PORT
  } = process.env;

  let env = {
    NODE_ENV, 
    RDS_DB_NAME,
    RDS_USERNAME,
    RDS_PASSWORD,
    RDS_HOSTNAME,
    RDS_PORT
  }

  console.log(env)
  res.render('index', { title: 'Express', env: env  });
});

module.exports = router;
