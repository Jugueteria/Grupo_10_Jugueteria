let db = require("../../database/models");

module.exports = {

    total: async (req, res) => {
        let products = await db.product.findAll()
        let users = await db.user.findAll()
        let categories = await db.product_category.findAll()



        let jsonProducts = {
            meta: {
                status: 200,
                totalProductos: products.length,
                totalUsuarios: users.length,
                totalCategories: categories.length,
                url: "localhost:3001/api/total"
            },

        }
        res.json(jsonProducts)
    },
}