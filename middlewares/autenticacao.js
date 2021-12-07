function middlewareAutentica(req, res, next) {
    console.log('Entrou no middleware de autenticação')
    if (10 === 10) {
        next()
    } else {
        console.log('A requisição foi barrada pelo meddleware de autenticação')
        res.render('login')
    }
}


module.exports = {
    middlewareAutentica
}