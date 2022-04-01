var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const usersControllers = require('../Controllers/usersControllers');
const{ body }=require("express-validator");
const validator=require("../middlewares/validation");



const storage = multer.diskStorage({
destination: (req, file ,cb) => {
   cb(null, path.join(__dirname, '../../public/images/Users') )
},

filename:(req, file, cb) => {

   const newFilename='perfil-'+ Date.now() + path.extname(file.originalname) ;
   cb(null, newFilename);
}

});

const upload = multer({storage});

//Ingreso Login
router.get('/login', usersControllers.login);
router.post('/login',validator.login, usersControllers.ingreso); 

//cerrar sesion
router.post('/logout', usersControllers.logout); 
//Formulario de productos
router.get('/form_admin', usersControllers.form_admin);

//Lista de usuarios
router.get('/', usersControllers.users);

//Creación de usuarios
   router.get('/register', usersControllers.register);
   router.post('/register', upload.single('imagenUsuario'),validator.register, usersControllers.create); 

   // Detalle usuario
router.get('/detail/:id',  usersControllers.userDetail);

//Editar un usuario

router.get('/edit/:id', usersControllers.edit); 
router.patch('/edit/:id',upload.single('imagenUsuario'),validator.register, usersControllers.update);

//Borrar un usuario

router.delete('/delete/:id', usersControllers.eliminar); 
       

module.exports = router;