const app = require("../app");
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");
const{validationResult}=require("express-validator");


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require("../database/models");



const usersControllers = {


      'ingreso': function(req, res) {
        const errors = validationResult(req)
        if(errors.errors.length>0){
         res.render("users/login",{errorsLogin:errors.mapped()})

        }

       const userfound = users.find(function(user){

          return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
       
        })

        if(userfound){
          
          let user={
           id: userfound.id,
           first_name:userfound.first_name,
           last_name:userfound.last_name,
           email:userfound.email,
           image:userfound.image
          
          }

          req.session.userLogin = user

          // creación de cookie

          if(req.body.remember){
            
          res.cookie("user", user.id,{maxAge:60000*24})
          }

          // creación de cookie
         
          res.redirect("/users/profile")

        }else{

           res.render("users/login",{ errorMsg:"Los datos ingresados son incorrectos"})

        }

      },
       
      logout:function(req, res){
      req.session.destroy();
      res.clearCookie("user");
      res.redirect("/");

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

      'users': function(req, res) {
        let promUser=db.user.findAll()
        let promUsercategory=db.user_category.findAll()
         Promise
         .all([promUser,promUsercategory]) 
           .then(([allUsers,allCategories])=>{
            return res.render('users/users', {allUsers,allCategories})})
            .catch(error => res.send(error))
      },
    

      'create': function(req, res) {
             
            const errors = validationResult(req)
            
            if(errors.errors.length>0){
             return res.render("users/register",{errors:errors.mapped()})

            }

            db.user.create({

          
              first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              image: req.file ? req.file.filename : "default.png",
              password: bcrypt.hashSync(req.body.password, 10),            
              Ucategory_id:1,

            })
              
            .then(()=> {
              return res.redirect('/users')})            
          .catch(error => res.send(error))
  
          
      },

      'userDetail': function(req, res) {
        let id = req.params.id
        db.user.findByPk(req.params.id,
          {
            
          })
          .then(users => {
              res.render('users/userDetail', {users});
          });

        },


        'profile': function(req, res){

         res.render('users/profile')
        },

        'edit': function(req, res) {
          let userId = req.params.id
          let promUsers = db.user.findByPk(userId);
              
              Promise
              .all([promUsers])
              .then(([User]) => {
                 
            return res.render(path.resolve(__dirname, '..', 'views',  'users',  'usersEdit'), {User})})
            .catch(error => res.send(error))
        },
      
        'update': function(req, res) {
          let userId = req.params.id
          db.user.update({
            first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              image: req.file ? req.file.filename : "default.png",
              password: bcrypt.hashSync(req.body.password, 10),            
              Ucategory_id:1,
      
          },
          {
            where: {user_id: userId }
          })
      
          .then(()=> {
                  return res.redirect('/users')})            
              .catch(error => res.send(error))
        },

        eliminar : (req, res) => {
          let userId = req.params.id
          db.user.destroy({where: {user_id: userId}, force: true})
              .then(()=>{
                  return res.redirect('/users')})
              .catch(error => res.send(error)) 
          }
  };
  
  module.exports = usersControllers;