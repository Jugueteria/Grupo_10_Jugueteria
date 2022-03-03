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
        res.render('products/productDetail');
      },

'formCreate': function(req, res) {
    res.render('products/formCreate');
  },

'products': function(req, res) {
    res.render('products/products', {products});
  },

//   'detail': (req, res) => {
//     let id = req.params.id
//     let product = products.find(product => product.id == id)
//     res.render('productDetail', {
//         products,
       
//     })

  }
  
  module.exports = productsControllers;