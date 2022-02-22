var express = require('express');
var router = express.Router();

var { index, create, update, destroy, getOne } = require('../controllers/clientes')

//CLIENTES

router.get('/', index)

router.get('/:id', getOne)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)

module.exports = router;
