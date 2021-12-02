var express = require('express');
var router = express.Router();

var { renderizaListaCliente, renderizaCadastroCliente } = require('../controllers/clientes')

router.get('/', renderizaListaCliente);

router.get('/cadastro', renderizaCadastroCliente);

module.exports = router;
