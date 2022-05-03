module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        image: dataTypes.IMAGE,
    };
    let config = {
        tableName:"Products",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 
    Product.associate=function(models){
        Product.hasmany(models, Users,{
            as:Users,
            foreingKey: "cartsId",
            otherUsersId:"carts_users_id", 
            otherUsersId:"category_id"
        }
         ) }
    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
 
    return Product
};