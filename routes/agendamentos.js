var express = require('express');
var router = express.Router();

var { renderizaListaAgendamento, renderizaCadastroAgendamento, getAllAgendamentos } = require('../controllers/agendamentos')


router.get('/', renderizaListaAgendamento);

router.get('/cadastro', renderizaCadastroAgendamento);
router.get('/list', getAllAgendamentos);

module.exports = router;
