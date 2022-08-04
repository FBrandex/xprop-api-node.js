const express = require('express');
const router = express.Router();

//retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Get rota pedido'
    });
});

//insere 1 pedido
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        msg: 'Insere um pedido',
        pedidoCriado: pedido
    });
});


//retorna dados de 1 pedido
router.get('/:id_order', (req, res, next) => {
    const id = req.params.id_order
        res.status(200).send({
            msg: 'Get rota pedido exclusivo',
            id: id
        });
});

//exclui um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'delete rota pedidos'
    });
});

module.exports = router;