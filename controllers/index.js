function renderizaHome(req, res, next) {
    res.render('home');
}

function renderizaLogin(req, res, next) {
    res.render('login');
}

module.exports = {
    renderizaHome,
    renderizaLogin
}