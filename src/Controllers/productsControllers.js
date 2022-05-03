const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const app = require("../app");
const fs = require('fs');
const path = require('path');

const Products=db.Products;
const Users=db.Users;
const Brands=db.Brands;
const carts=db.Carts;
const Category=db.Category;

const productsControllers = {

   
'productCart': (req, res)=> {
        res.render('products/productCart');
    },


'productDetail': function(req, res) {
      let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('products/productDetail', {
            product
           
        })
      },

'formCreate': function(req, res) {
    res.render('products/formCreate');
  },

'products': function(req, res) {
    res.render('products/products', {products});
  },

'lista': function(req, res) {
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			imagen: 'default.png',
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},

  'edit': function(req, res) {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('products/productsEdit', {productToEdit})
	},

	'update': function(req, res){
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			imagen: 'default.png',
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

	eliminar : (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/');
      }





  }
  
  module.exports = productsControllers;