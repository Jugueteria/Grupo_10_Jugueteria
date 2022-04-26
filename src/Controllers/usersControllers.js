const app = require("../app");
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");
const{validationResult}=require("express-validator");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



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
        res.render('users/users', {users});
      },


      'create': function(req, res) {
  
            const errors = validationResult(req)
            
            if(errors.errors.length>0){
             return res.render("users/register",{errors:errors.mapped()})

            }

            let newUser = {
              id: users[users.length - 1].id + 1,
              first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              category:"user",
              image: req.file ? req.file.filename : "default.png"
            };
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/users/login');

        
         
      },

      'userDetail': function(req, res) {
        let id = req.params.id
          let user = users.find(user => user.id == id)
          res.render('users/userDetail', {
              user
             
          })
        },


        'profile': function(req, res){

         res.render('users/profile')
        },

        'edit': function(req, res) {
         
          let id = req.params.id
          let userToEdit = users.find(user => user.id == id)
          res.render('users/usersEdit', {userToEdit})
          console.log(userToEdit)
        },
      
        'update': function(req, res){
          let id = req.params.id;
          let userToEdit = users.find(user => user.id == id)

          userToEdit = {
            id: userToEdit.id,
            first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              category:"user",
              image: req.file ? req.file.filename : "default.png"

          };
          
          let newUsers = users.map(user => {
            if (user.id == userToEdit.id) {
              return user = {...userToEdit};
            }
            return user;
          })
      
          fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
          res.redirect('/');
        },

        eliminar : (req, res) => {
          let id = req.params.id;
          let finalUsers = users.filter(user => user.id != id);
          fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
          res.redirect('/');
        }
  };
  
  module.exports = usersControllers;