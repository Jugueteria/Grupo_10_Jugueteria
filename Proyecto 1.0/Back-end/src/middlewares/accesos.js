const db = require("../database/models");

function accesos(req, res, next) {
  
  if(req.session.userLogin.category==2){
   next()
  }else{
    res.redirect("/")
  }
}

module.exports = accesos;