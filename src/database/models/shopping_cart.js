module.exports = (sequelize, dataTypes) => {
    let alias = 'shopping_cart';
    let cols = {
        cart_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
      
        total_products: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        }
       
    };
    let config = {
        tableName:'shopping_cart',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const shopping_cart = sequelize.define(alias,cols,config);

    shopping_cart.associate = function (models) {
        shopping_cart.belongsTo(models.user, { 
            as: "users",
            foreignKey: "user_id"
        })

        shopping_cart.belongsToMany(models.product, { 
            as: "products",
            through:"cart_detail",
            foreignKey: "cart_id",
            otherKey:"product_id",
            timestamps:false
        })


        
    }

    return shopping_cart
};
