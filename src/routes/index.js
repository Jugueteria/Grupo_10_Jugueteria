var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');

/* GET home page. */
router.get('/', mainController.index);

router.get("/profile", function(req,res){
    if(req.session.userLogin){
        res.send("Hola" + " " + req.session.userLogin.first_name)
    }else{
        res.send("No estas logueado")
    }
})
//comentario de prueba 
//nuevo comentario 
module.exports = router;
