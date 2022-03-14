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

   // Detalle usuario
router.get('/detail/:id', usersControllers.userDetail);

//Editar un usuario

router.get('/edit/:id', usersControllers.edit); 
router.patch('/edit/:id', usersControllers.update);

//Borrar un usuario

router.delete('/delete/:id', usersControllers.eliminar); 
       

module.exports = router;