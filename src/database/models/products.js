module.exports = (sequelize, dataTypes) => {
    let alias = 'product';
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
      
        title: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        price: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(100),
           
        }
        
    };
    let config = {
        tableName:'products',
        timestamps: false,
      
    }
    const product = sequelize.define(alias,cols,config);

    product.associate = function (models) {
        product.belongsTo(models.trademark, { 
            as: "trademarks",
            foreignKey: "trademark_id"
        })

        product.belongsTo(models.product_category, { 
            as: "pcategorias",
            foreignKey: "Pcategory_id"
        })

        product.belongsToMany(models.shopping_cart, { 
            as: "shoppingCart",
            through:"cart_detail",
            foreignKey: "product_id",
            otherKey:"cart_id",
            timestamps:false
        })

    }

    return product
};
