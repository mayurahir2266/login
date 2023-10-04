var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

/* GET home page. */

router.post('/register',user.register_user)

router.post('/login',user.login_user)

router.post('/logout',user.logout_user)

module.exports = router;
