var express = require('express');
var router = express.Router();
const multer = require("../middlewares/multerUsers");
const usersControllers = require('../Controllers/usersControllers');
const validator = require("../middlewares/validation");
const accesos = require("../middlewares/accesos");
const sinLogin = require("../middlewares/sinLogin");



//Ingreso Login
router.get('/login', usersControllers.login);
router.post('/login', validator.login, usersControllers.ingreso);

//cerrar sesion
router.post('/logout', usersControllers.logout);
//Formulario de productos
router.get('/form_admin', usersControllers.form_admin);

//Lista de usuarios
router.get('/', sinLogin, usersControllers.users);

//Creación de usuarios
router.get('/register', accesos, usersControllers.register);
router.post('/register', multer(), validator.register, usersControllers.create);

// Detalle usuario
router.get('/detail/:id', sinLogin, usersControllers.userDetail);

//Editar un usuario

router.get('/edit/:id', accesos, sinLogin, usersControllers.edit);
router.patch('/edit/:id',accesos, multer(), validator.register, usersControllers.update);

//Borrar un usuario

router.delete('/delete/:id',accesos, usersControllers.eliminar);


//ver perfil de ingreso

router.get('/profile', sinLogin, usersControllers.profile);



module.exports = router;