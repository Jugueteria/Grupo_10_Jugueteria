function accesos(req, res, next){
if (req.session.userLogin){
return  res.redirect("/");
}
next();
}

module.exports=accesos;