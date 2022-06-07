var express = require('express');
var router = express.Router();
const productsControllers = require('../Controllers/productsControllers');
const sinLogin=require("../middlewares/sinLogin");
const accesos = require("../middlewares/accesos");
const validator = require("../middlewares/validation");
const multer = require("../middlewares/multerProducts");

//Carrito de ptoductos
router.get('/productCart',sinLogin, productsControllers.productCart);

// Detalle producto
router.get('/detail/:id',sinLogin, productsControllers.productDetail);

//Lista de productos
router.get('/',sinLogin, productsControllers.products);


//Creación de productos
router.get('/create',sinLogin,accesos, productsControllers.formCreate);
router.post('/',multer(),validator.registerproduct, productsControllers.lista); 


//Editar un producto

router.get('/edit/:id',accesos,sinLogin, productsControllers.edit); 
router.patch('/edit/:id',accesos,multer(),validator.registerproduct, productsControllers.update);

//Borrar un producto

router.delete('/delete/:id',accesos, productsControllers.eliminar); 



module.exports = router;