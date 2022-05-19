var express = require('express');
var router = express.Router();
const productsControllers = require('../Controllers/productsControllers');
const sinLogin=require("../middlewares/sinLogin");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file ,cb) => {
       cb(null, path.join(__dirname, '../../public/images/Products') )
    },
    
    filename:(req, file, cb) => {
    
       const newFilename='product-'+ Date.now() + path.extname(file.originalname) ;
       cb(null, newFilename);
    }
    
    });
    
    const upload = multer({storage});

//Carrito de ptoductos
router.get('/productCart',sinLogin, productsControllers.productCart);

// Detalle producto
router.get('/detail/:id',sinLogin, productsControllers.productDetail);

//Lista de productos
router.get('/',sinLogin, productsControllers.products);


//Creación de productos
router.get('/create',sinLogin, productsControllers.formCreate);
router.post('/', upload.single('imagenProducto'), productsControllers.lista); 


//Editar un producto

router.get('/edit/:id',sinLogin, productsControllers.edit); 
router.patch('/edit/:id', productsControllers.update);

//Borrar un producto

router.delete('/delete/:id', productsControllers.eliminar); 



module.exports = router;