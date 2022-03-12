const app = require("../app");
const fs = require('fs');
const path = require('path');

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
        let newUser = {
          id: users[users.length - 1].id + 1,
          ...req.body,
          category:"user",
          image:'default.png',
        };
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/users');
      }
    

   

      

  };
  
  module.exports = usersControllers;