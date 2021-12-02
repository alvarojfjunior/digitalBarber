function renderizaListaCliente(req, res, next) {
    res.render('listagemCliente')
}

function renderizaCadastroCliente(req, res, next) {
    res.render('formularioCliente')
}

module.exports = {
    renderizaListaCliente,
    renderizaCadastroCliente
}