const Agendamento = require("../models/Agendamento")

function renderizaListaAgendamento(req, res, next) {
    res.render('listagemAgendamento')
}

function renderizaCadastroAgendamento(req, res, next) {
    res.render('formularioAgendamento')
}

async function getAllAgendamentos(req, res, next) {
    
    const agendamentos = await Agendamento.findAll()

    res.json(agendamentos)
}

module.exports = {
    renderizaListaAgendamento,
    renderizaCadastroAgendamento,
    getAllAgendamentos,
}