let db = require("../../database/models");
const Op = db.sequelize.Op;

module.exports = {
    "list": async (req, res) => {
        let products = await db.product.findAll({ attributes: ['product_id', 'title', 'description', 'price'] })

        products.forEach(product => {
            product.setDataValue("endpoint", "localhost:3001/api/products/" + product.product_id);
        })


        let jsonProducts = {
            meta: {
                status: 200,
                count: products.length,
                url: "localhost:3001/api/products"
            },
            products: products
        }
        res.json(jsonProducts)
    },




    "latest": function (req, res) {
        db.product.findAll({
            limit: 1,
            order: [['product_id', 'DESC']]
        }).then(result => {
            let respuesta = {
                meta: {
                    status: 200,
                    categoryCount: result,
                    url: "http://localhost:3001/api/products/latest"
                },
            }
            res.json(respuesta)
        })
    },

    "categories": function (req, res) {
        db.product_category.findAll().then(categories => {
            let respuesta = {
                meta: {
                    status: 200,
                    categoryCount: categories.length, 
                    url: "http://localhost:3001/api/products/categories"
                },
            }
            res.json(respuesta)
        })
    },

    countByCategory: function (req, res) {
        db.product.count({
            include: [{ association: "categories" }],
            group: ['categories.Pcategory_name']
        }).then(result => {
            let respuesta = {
                meta: {
                    status: 200,
                    categoryCount: result,
                    url: "http://localhost:3001/api/products/total"
                },
            }
            res.json(respuesta)
        })
    },



    "show": (req, res) => {
        db.product
            .findByPk(req.params.id, {
                include: [{ association: "categories"},{ association: "trademarks"}]
            })
            .then(product => {
                let jsonProduct = {
                    meta: {
                        status: 200,
                        url: "localhost:3001/api/users/" + req.params.id
                    },
                    data: {
                        product_id: product.product_id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        image: "http://localhost:3001/images/products/" + product.image,
                        category:product.categories.Pcategory_name,
                        trademark:product.trademarks.trademark_name
                    }
                }
                res.json(jsonProduct);

            })
    },

   
}
