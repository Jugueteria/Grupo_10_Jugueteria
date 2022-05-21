const { check, body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require("../database/models");


module.exports = {

    login: [
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
    register: [

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
            .custom(function (value) {
               return db.user.findOne({

                    where: {
                        email: value
                    }
                }).then((user)=>{
                    if (user) {
                        return Promise.reject("Email ya registrado")
                    }
                })

            }),

        check("password")
            .notEmpty()
            .withMessage("Falta ingresar Contraseña")

    ]


}