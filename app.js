const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoute = require('./routes/products');
const orderRoute = require('./routes/orders'); 

app.use(morgan('dev')); //executa o cb enviando um log no console para melhor visualização
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})


app.use('/products', productRoute);
app.use('/order', orderRoute);

app.use((req, res, next)=>{
    const erro = new Error('Não encontrado!')
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            msg: error.message
        }
    })
})

app.use('/teste',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'OK'
    });
});

module.exports = app;