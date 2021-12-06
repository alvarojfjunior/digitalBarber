function renderizaListaAgendamento(req, res, next) {
    res.render('listagemAgendamento')
}

function renderizaCadastroAgendamento(req, res, next) {
    res.render('formularioAgendamento')
}

function getAllAgendamentos(req, res, next) {
    const agendamentos = [
        {
            id: 1,
            nome: 'Luiz'
        },
        {
            id: 2,
            nome: 'Guilherme'
        },
    ]
    res.send(agendamentos)
}

module.exports = {
    renderizaListaAgendamento,
    renderizaCadastroAgendamento,
    getAllAgendamentos,
}