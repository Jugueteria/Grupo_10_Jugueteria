// const fs = require('fs');
// const path = require('path');



// function findAll(){
// const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
// return users;
// }

function recordame(req, res, next){
// if(!req.session.userLogin && req.cookies.user){

//    let users= findAll()
//   const usuarioLogueado = users.find(function(user){

//     return user.id == req.cookies.user
//    })
//    let user={
//     id: usuarioLogueado.id,
//     first_name:usuarioLogueado.first_name,
//     last_name:usuarioLogueado.last_name
    
//    }

// req.session.userLogin= user;
// return next()

// }else{
    
//     return next()
// }
}

module.exports=recordame;