const express = require('express');
const app = express();
const path = require("path");
app.use(express.static('Public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
});

app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
});

app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/productCart.html'))
});


app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/views/productDetail.html'))
 });


app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'))
 });

