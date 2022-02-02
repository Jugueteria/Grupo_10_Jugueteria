const express = require('express');
const app = express();
const path = require("path");
app.use(express.static('Public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

// app.get('/', (req , res) => {
//     res.sendFile(path.join(__dirname + '/views/home.html'))
// });


app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/views/Formulario_registro.html'))
 });

 //Ruta Detalle de Producto
app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

// app.get('/', (req , res) => {
//      res.sendFile(path.join(__dirname + '/views/Formulario_ingreso.html'))
//  });