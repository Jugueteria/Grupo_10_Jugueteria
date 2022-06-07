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
            .withMessage("Falta ingresar Nombre")
            .isLength({ min: 2 })
            .withMessage("El nombre debe tener al menos 2 caracteres"),

        check("last_name")
            .notEmpty()
            .withMessage("Falta ingresar Apellido")
            .isLength({ min: 2 })
            .withMessage("El nombre debe tener al menos 2 caracteres"),

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
                }).then((user) => {
                    if (user) {
                        return Promise.reject("Email ya registrado")
                    }
                })

            }),

        check("password")
            .notEmpty()
            .withMessage("Falta ingresar Contraseña")
            .isLength({ min: 8 })
            .withMessage("La contraseña debe tener minimo 8 caracteres")
            .isAlphanumeric()
            .withMessage("La contraseña debe contener letras y números")

    ],

    registerproduct: [

        check("titulo")
            .notEmpty()
            .withMessage("Falta ingresar nombre del producto")
            .bail()
            .isLength({ min: 5 })
            .withMessage("El nombre debe tener al menos 5 caracteres"),

        check("precio")
            .notEmpty()
            .withMessage("Falta ingresar precio"),


        check("descripcionCorta")
            .notEmpty()
            .withMessage("Falta descripción")
            .bail()
            .isLength({ min: 20 })
            .withMessage("La descripción debe tener al menos 20 caracteres"),

      

    ]


}