var express = require('express');
var router = express.Router();
const productsControllers = require('../Controllers/productsControllers');


router.get('/productCart', productsControllers.productCart);
router.get('/productDetail', productsControllers.productDetail);
router.get('/create', productsControllers.formCreate);
router.get('/', productsControllers.products);
// router.get('/products/:id', productsControllers.detail);



module.exports = router;