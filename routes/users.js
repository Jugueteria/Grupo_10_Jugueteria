var express = require('express');
var router = express.Router();
const usersControllers = require('../Controllers/usersControllers');


router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);
router.get('/form_admin', usersControllers.form_admin);

//Lista de usuarios
router.get('/', usersControllers.users);

   //Creación de usuarios
   router.get('/create', usersControllers.formCreate);
   router.post('/', usersControllers.lista); 
       

module.exports = router;