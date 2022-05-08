module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
      
        first_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        password: {
            type: dataTypes.STRING(20),
            allowNull: false
        }
        
    };
    let config = {
        tableName:'users',
        timestamps: false,
        
    }
    const user = sequelize.define(alias,cols,config);

    user.associate = function (models) {
        user.belongsTo(models.user_category, { 
            as: "user_categories",
            foreignKey: "Ucategory_id"
        })

        user.hasMany(models.shopping_cart, { 
            as: "shopping_cart",
            foreignKey: "user_id"
        })


    }

    return user
};
