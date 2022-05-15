const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');
const db = require("../database/models");



function recordame(req, res, next) {
  if (!req.session.userLogin && req.cookies.user) {
    db.user.findOne({

      where: {
        user_id: req.cookies.user
      }
    }).then((userFound) => {
      if (userFound) {
        let user = {
          user_id: userFound.user_id,
          first_name: userFound.first_name,
          last_name: userFound.last_name

        }

        req.session.userLogin = user;
        return next()

      }else {
        return next()
      }
    })
  } else {

    return next()
  }
}

module.exports = recordame;