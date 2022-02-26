var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');

/* GET home page. */
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);


module.exports = router;