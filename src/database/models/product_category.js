module.exports = (sequelize, dataTypes) => {
  let alias = 'product_category';
  let cols = {
    Pcategory_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    Pcategory_name: {
      type: dataTypes.STRING(20),
      allowNull: false
    }

  };
  let config = {
    tableName: 'product_category',
    timestamps: false,

  }
  const product_category = sequelize.define(alias, cols, config);

  product_category.associate = function (models) {
    product_category.hasMany(models.product, {
      as: "products",
      foreignKey: "Pcategory_id"
    })

  }

  return product_category
};