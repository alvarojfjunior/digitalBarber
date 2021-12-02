var express = require('express');
var router = express.Router();

var { renderizaHome, renderizaLogin } = require('../controllers/index')


router.get('/', renderizaHome);

router.get('/login', renderizaLogin);

module.exports = router;
