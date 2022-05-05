module.exports = (sequelize, dataTypes) => {
    let alias = 'trademark';
    let cols = {
        trademark_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
      
       trademark_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        }
        
    };
    let config = {
        tableName:'trademark',
        timestamps: false,
        
    }
    const trademark = sequelize.define(alias,cols,config);

    trademark.associate = function (models) {
        trademark.hasMany(models.product, { 
            as: "products",
            foreignKey: "trademark_id"
        })

    }

    return trademark
};
