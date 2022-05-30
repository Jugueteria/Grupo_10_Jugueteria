let db = require("../../database/models");
const Op = db.sequelize.Op;

module.exports = {
    list: async (req, res) => {
        let products = await db.product.findAll({ attributes: ['product_id', 'title', 'description', 'price'] })

       products.forEach(product => {
            product.setDataValue("endpoint", "localhost3001/api/products/" + product.product_id);
        })


        let jsonProducts = {
            meta: {
                status: 200,
                count: products.length,
                url: "localhost3001/api/products"
            },
            products: products
        }
        res.json(jsonProducts)
    },

    show: (req, res) => {
        db.product
            .findByPk(req.params.id, { attributes: ['product_id', 'title', 'description', 'price'] })
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200
                })
            })
    }

}