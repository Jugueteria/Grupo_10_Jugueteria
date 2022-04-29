module.exports = (sequelize, dataTypes) => {
    let alias = 'Carts';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        purchaseName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        numerItems: {
            type: dataTypes.NUMBER(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        
    };
    let config = {
        tableName:"Carts",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Carts = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return Carts
};