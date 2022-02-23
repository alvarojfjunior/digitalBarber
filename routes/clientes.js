var express = require('express');
var router = express.Router();

var { index, create, update, destroy, getOne, trazerUsuarioGithub } = require('../controllers/clientes')

//CLIENTES

router.get('/github/:nomeDeUsuario', trazerUsuarioGithub)

router.get('/', index) //Listar todos os clientes do banco

router.get('/:id', getOne) //Traz apenas um registro do banco

router.post('/', create) //Cria um registro no banco

router.put('/:id', update) //Altera um registro no banco

router.delete('/:id', destroy) //Deletar um registro no banco

module.exports = router;
