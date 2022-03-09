var express = require('express');
var router = express.Router();
const usersControllers = require('../Controllers/usersControllers');


router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);
router.get('/form_admin', usersControllers.form_admin);


module.exports = router;