const app = require("../app");
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const usersControllers = {


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

      'formCreate': function(req, res) {
        res.render('users/register');
      },

      'lista': function(req, res) {
    
          if(req.file){

            let newUser = {
              id: users[users.length - 1].id + 1,
              first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              category:"user",
              image: req.file.filename
            };
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/users');

          } else{

            let newUser = {
              id: users[users.length - 1].id + 1,
              id: users[users.length - 1].id + 1,
              first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              category:"user",
              image: 'default.png'
            };
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/users');



          }

         
      },

      'userDetail': function(req, res) {
        let id = req.params.id
          let user = users.find(user => user.id == id)
          res.render('users/userDetail', {
              user
             
          })
        },

        'edit': function(req, res) {
          let id = req.params.id
          let userToEdit = users.find(user => user.id == id)
          res.render('users/usersEdit', {userToEdit})
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