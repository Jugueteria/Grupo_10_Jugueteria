module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: { type: dataTypes.STRING(100),           
            allowNull: false
        },
        password: { type: dataTypes.STRING(100),
            allowNull: false
        },
        image: { type: dataTypes.IMAGE,
            allowNull: false}
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    const Users = sequelize.define(alias, cols, config); 
    Users.associate=function(models){
        Users.hasmany(models, Products,{
            as:Products,
            foreingKey: "cartsId",
            otherUsersId:"carts_users_id"})
        
               
            
        }
    return User
    
};