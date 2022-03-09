const app = require("../app");

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

      

  };
  
  module.exports = usersControllers;