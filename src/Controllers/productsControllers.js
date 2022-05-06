const app = require("../app");
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const productsFilePath = path.join(dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const Products = db.Products;


const productsControllers = {


'productCart': (req, res)=> {
    db.Products.findAll((req.params.product)
    )
    .then(products=> {
        res.render('products.ejs',{product})

    }),

'productDetail': (req, res) =>{
      db.Products.findByPk((req.params.id)
      .then(product =>{
          res.render('productDetail.ejs',{product});
      })

}};

create: function (req, res) {
    Products.create(
        {
          title: req.body.title,
          description:req.body.description,
          image: re.body.description
        }
    )
    .then(()=> {
        return res.redirect ('/products')})
    .catch(error => res.send(error))

  },

    edit: function(req, res) {
        let ProductId = req.params.id;
        let productToEdit = products.findAll();
        res.render('products/productsEdit', {productToEdit})
    },

    update: (req, res)=>{
        let Productid = req.params.id;
        Products.update(
            {
        title: req.body.title,
        description:req.body.description,
        image: re.body.image
            }),
        {
        where: {id: productId}
		}
		.then(()=> {
        return res.redirect('/Products')
        .catch(error => res.send(error))
    })
},
	

    delete: (req, res)=> {
        let productId = req.params.id;
        Products.findByPk(productId)
        .then (Product => {
            return res.render(path.resolve(_(dirname, '..', 'views',  'productsEdit'), {Product})})
            .catch(error => res.send(error))
        }

};

  module.exports = productsControllers;