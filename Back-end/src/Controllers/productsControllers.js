const app = require("../app");
const fs = require('fs');
const path = require('path');
let db = require("../database/models");
const trademark = require("../database/models/trademark");
const { validationResult } = require("express-validator");


const productsControllers = {


	'productCart': (req, res) => {
		res.render('products/productCart');
	},


	'productDetail': function (req, res) {
		let id = req.params.id
		let trademarks = db.trademark.findAll()
		let categories = db.product_category.findAll()
		let products = db.product.findByPk(req.params.id, {

			include: [{ association: "trademarks" }, { association: "categories" }]
		})

		Promise.all([products, trademarks, categories])
			.then(function ([products, trademarks, categories]) {
				res.render('products/productDetail', { products: products, trademarks: trademarks, categories: categories });
			});
	},

	'formCreate': function (req, res) {

		let trademarks = db.trademark.findAll()
		let categories = db.product_category.findAll()

		Promise.all([trademarks, categories])
			.then(function ([trademarks, categories]) {

				return res.render('products/formCreate', { trademarks: trademarks, categories: categories });
			})

	},


	'products': async (req, res) => {
		try {
			let productos = await db.product.findAll();
			let category = await db.product_category.findAll();
			return res.render('products/products', { productos: productos, category: category })

		} catch (error) {
			console.log(error);
		}

	},

	'lista': function (req, res) {
		const errors = validationResult(req)
		if (errors.errors.length > 0) {
			let trademarks = db.trademark.findAll()
			let categories = db.product_category.findAll()

			Promise.all([trademarks, categories])
				.then(function ([trademarks, categories]) {

					return res.render('products/formCreate', { errorsproducts: errors.mapped(), trademarks: trademarks, categories: categories });
				})


		} else {
			db.product.create({
				title: req.body.titulo,
				description: req.body.descripcionCorta,
				price: req.body.precio,
				image: req.file ? req.file.filename : "default.png",
				trademark_id: req.body.marca,
				Pcategory_id: req.body.category,

			})

				.then(() => {
					return res.redirect('/products')
				})
				.catch(error => res.send(error))
		}

	},

	'edit': function (req, res) {
		let productId = req.params.id
		let promProducts = db.product.findByPk(productId);
		let trademarks = db.trademark.findAll()
		let categories = db.product_category.findAll()


		Promise
			.all([promProducts, trademarks, categories])
			.then(([Product, trademarks, categories]) => {

				return res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsEdit'), { Product, trademarks: trademarks, categories: categories })
			})
			.catch(error => res.send(error))
	},

	'update': function (req, res) {
		const errors = validationResult(req)
		if (errors.errors.length > 0) {
			let productId = req.params.id
			let promProducts = db.product.findByPk(productId);
			let trademarks = db.trademark.findAll()
			let categories = db.product_category.findAll()

			Promise
			.all([promProducts, trademarks, categories])
			.then(([Product, trademarks, categories]) => {

				return res.render(path.resolve(__dirname, '..', 'views', 'products', 'productsEdit'), { errorsproducts: errors.mapped(),Product, trademarks: trademarks, categories: categories })
				})
		}else{

			let productId = req.params.id
			db.product.update({
				title: req.body.titulo,
				description: req.body.descripcionCorta,
				price: req.body.precio,
				image: req.file ? req.file.filename : "default.png",
				trademark_id: req.body.marca,
				Pcategory_id: req.body.category,
	
			},
				{
					where: { product_id: productId }
				})
	
				.then(() => {
					return res.redirect('/products')
				})
				.catch(error => res.send(error))
		}

	},

	eliminar: (req, res) => {
		let productId = req.params.id
		db.product.destroy({ where: { product_id: productId }, force: true })
			.then(() => {
				return res.redirect('/products')
			})
			.catch(error => res.send(error))
	}
}

module.exports = productsControllers;