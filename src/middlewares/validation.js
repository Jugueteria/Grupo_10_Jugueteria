const{check, body }=require("express-validator");
const fs = require('fs');
const path = require('path');



function findAll(){
const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
return users;

}


module.exports={

login:[
    check("email")
    .notEmpty()
    .withMessage("Falta ingresar Email")
    .bail()
    .isEmail()
    .withMessage("Formato de correo incorrecto"),

    check("password")
    .notEmpty()
    .withMessage("Falta ingresar Contraseña")

],
register:[
   
    check("first_name")
    .notEmpty()
    .withMessage("Falta ingresar Nombre"),

    check("last_name")
    .notEmpty()
    .withMessage("Falta ingresar Apellido"),

    check("email")
    .notEmpty()
    .withMessage("Falta ingresar Email")
    .bail()
    .isEmail()
    .withMessage("Formato de correo incorrecto")
    .bail()
    .custom(function(value){
      let users=findAll()
      let userFound =users.find(function(user){

            return user.email==value
        })

        if(userFound){
           throw new Error("Email ya registrado")
        }
        return true;
    }),

    check("password")
    .notEmpty()
    .withMessage("Falta ingresar Contraseña")
    
]


}