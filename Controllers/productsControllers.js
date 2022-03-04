const app = require("../app");
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
			image: 'default.png'
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},

  }
  
  module.exports = productsControllers;