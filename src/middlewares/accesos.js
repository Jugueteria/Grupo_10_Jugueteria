const db = require("../database/models");

function accesos(req, res, next) {
   let Iduser = db.user.findOne({
    where: {
      Ucategory_id: 2
    }
  })
        if (req.session.userLogin!=Iduser) {
            console.log(Iduser)
        
            return res.redirect("/");
        }
        next();
   
}

module.exports = accesos;