var express = require('express');
var router = express.Router();
const productsControllers = require('../Controllers/productsControllers');

//Carrito de ptoductos
router.get('/productCart', productsControllers.productCart);

// Detalle producto
router.get('/detail/:id', productsControllers.productDetail);

//Lista de productos
router.get('/', productsControllers.products);


//Creación de productos
router.get('/create', productsControllers.formCreate);
router.post('/', productsControllers.lista); 


//Editar un producto

router.get('/edit/:id', productsControllers.edit); 
router.patch('/edit/:id', productsControllers.update);

module.exports = router;