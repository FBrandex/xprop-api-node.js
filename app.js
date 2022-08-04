const express = require('express');
const app = express();

const productRoute = require('./routes/products');

app.use('/products', productRoute);
app.use('/teste',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'OK'
    });
});

module.exports = app;