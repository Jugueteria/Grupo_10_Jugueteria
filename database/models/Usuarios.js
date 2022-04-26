module.exports = function(sequelize, DataTypes){

    let alias = "Usuarios";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes
        },
        contraseña: {
            type: DataTypes.INTEGER
        },
        imagen: {
            type: DataTypes
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
}