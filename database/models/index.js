'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Products = db.Products;
const Usuarios = db.Usuarios;


const productsControllers = {
    'list': (req, res) => {
        db.Products.findAll({
            include: ['titulo']
        })
            .then(products => {
                res.render('productDetail.ejs', {product})
            })
    },
    'detail': (req, res) => {
        db.Products.findByPk(req.params.id,
            {
                include : ['titulo']
            })
            .then(products => {
                res.render('productDetail.ejs', {products});
            });
    },
    'new': (req, res) => {
        db.Products.findAll({
            order : [
                ['DESC']
            ],
            limit: 5
        })
            .then(products => {
                res.render('products', {products});
            });
    },
    
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promProducts= Products.findAll();
        let promUsers= Users.findAll();
        
        Promise
        .all([promProducts, promUsers])
        .then(([allProducts, allUsers]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'formCreate'), {allProducts,allUsers})})
        .catch(error => res.send(error))
    },
    create: function (req,res) {
        // verificar si va Products o base_jugueteria
        .create(
            {
                title: req.body.title,
                description: req.body.description,
                awards: req.body.awards,
                price: req.body.price,
                image: req.body.image,
                brandsId: req.body.brandsId,
                categoryId: req.body.categoryId
            }
        )
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
    },
    //edit: function(req,res) {
        let productId = req.params.id;
        let promProducts = Products.findByPk(productsId,{include: ['genre','actors']});
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        Promise
        .all([promMovies, promGenres, promActors])
        .then(([Movie, allGenres, allActors]) => {
            //Movie.release_date = moment( new Date(Movie.release_date)).toLocaleDateString();
            Movie.release_date = moment(Movie.release_date).locale('es-us').format('YYYY-MM-DD');
            //new Date("Sun Jan 03 1999 21:00:00 GMT-0300 (hora estándar de Argentina)").toLocaleDateString()
            //return res.send(Movie.release_date);
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
        .catch(error => res.send(error))
    },
    
    update: function (req,res) {
        let movieId = req.params.id;
        Movies
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;

module.exports = db;
