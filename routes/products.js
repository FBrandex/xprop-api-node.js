const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Get rota produtos'
    });
});

//insere 1 produto
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, result, field) =>{
                conn.release();
                if(error){
                    console.log('aqui')
                    return res.status(500).send({
                        error: error,
                        responde: null
                    });
                } 
                 res.status(201).send({
                     msg: 'Produto inserido com sucesso',
                    id_produto: result.insertId
                 });
            }
        )
    });
});


//retorna dados de 1 produto
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product

    if(id === 'especial'){
        res.status(200).send({
            msg: 'Get especial exclusivo',
            id: id
        })
    }else{
        res.status(200).send({
            msg: 'Get rota produtos exclusivo',
            id: id
        });
    }
 
});

//altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        msg: 'patch rota produtos'
    });
});

//exclui um produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'delete rota produtos'
    });
});

module.exports = router;