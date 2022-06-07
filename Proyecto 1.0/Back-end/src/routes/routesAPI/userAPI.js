var express = require('express');
var router = express.Router();
const usersControllersAPI = require('../../Controllers/controllersAPI/userControllerAPI');


router.get('/users',usersControllersAPI.list);
router.get('/users/:id',usersControllersAPI.show);


module.exports=router;