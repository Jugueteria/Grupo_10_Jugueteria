var express = require('express');
var router = express.Router();
const totalAPI = require('../../Controllers/controllersAPI/totalControllerAPI');


router.get('/total',totalAPI.total);




module.exports=router;