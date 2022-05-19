module.exports = (sequelize, dataTypes) => {
    let alias = 'user_category';
    let cols = {
        Ucategory_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Ucategory_name: {
            type: dataTypes.STRING(20),
            allowNull: false
        }

    };

    let config = {
        tableName: 'user_category',
        timestamps: false,

    }

    const user_category = sequelize.define(alias, cols, config);

    user_category.associate = function (models) {

        user_category.hasMany(models.user, {
            as: "users",
            foreignKey: "Ucategory_id"
        })


    }

    return user_category
};