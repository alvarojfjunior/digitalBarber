var express = require('express');
var router = express.Router();

var { renderizaListaCliente, renderizaCadastroCliente, controllerTesteSequelize } = require('../controllers/clientes')

router.get('/', renderizaListaCliente);

router.get('/cadastro', renderizaCadastroCliente);

router.get('/teste-sequelize', controllerTesteSequelize)

module.exports = router;
