const express = require('express');
const app = express();
app.use(express.static('Public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});