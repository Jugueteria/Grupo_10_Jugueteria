const app = require("../app");

const mainController = {

    'index': function(req, res) {
        res.render('index');
    },

    productCart: (req, res)=> {
        res.render('products/productCart');
    },


    'productDetail': function(req, res) {
        res.render('products/productDetail');
      },


      'login': function(req, res) {
        res.render('users/login');
      },


      'register': function(req, res) {
        res.render('users/register');
      },


      'form_admin': function(req, res) {
        res.render('users/form_admin');
      },


  };
  
  module.exports = mainController;