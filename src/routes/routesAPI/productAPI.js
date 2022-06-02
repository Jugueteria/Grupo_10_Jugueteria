var express = require('express');
var router = express.Router();
const productsControllersAPI = require('../../Controllers/controllersAPI/productControllerAPI');


router.get('/products',productsControllersAPI.list);
router.get('/products/latest',productsControllersAPI.latest);
router.get('/products/:id',productsControllersAPI.show);



module.exports=router;