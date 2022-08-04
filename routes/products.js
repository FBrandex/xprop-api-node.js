const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Get rota produtos'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        msg: 'post rota produtos'
    })
});

module.exports = router;