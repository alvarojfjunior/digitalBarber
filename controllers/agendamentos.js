function renderizaListaAgendamento(req, res, next) {
    res.render('listagemAgendamento')
}

function renderizaCadastroAgendamento(req, res, next) {
    res.render('formularioAgendamento')
}

module.exports = {
    renderizaListaAgendamento,
    renderizaCadastroAgendamento
}