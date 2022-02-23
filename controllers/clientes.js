const Cliente = require("../models/Cliente")
const axios = require('axios').default;

async function trazerUsuarioGithub(req, res) {
    try {
        //Captura o parametro nomeDeUsuario e guarda em uma variável 
        const nomeDoUsuario = req.params.nomeDeUsuario

        //Faz uma requisição para o github, e espera o usuario que está guardado na vairiável acima
        const retornoDoGithub = await axios.get('https://api.github.com/users/' + nomeDoUsuario)

        //Cria um Cliente no banco com as informações adquiridas no github
        const respostaCreateCliente = await Cliente.create({
            nome: retornoDoGithub.data.name,
            email: retornoDoGithub.data.location,
            telefone: retornoDoGithub.data.bio
        })
        
        //Faz o retorno dos dados que vieram na requisição do github
        return res.json(retornoDoGithub.data)
    } catch (error) {
        return res.json({ message: error.message })
    }
}


//index ou getAll
async function index(req, res) {
    try {
        const listaClientes = await Cliente.findAll();
        return res.json(listaClientes)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function getOne(req, res) {
    const id = req.params.id
    try {
        const retornoDoCliente = await Cliente.findByPk(id)
        return res.json(retornoDoCliente)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function create(req, res) {
    try {
        const respostaCreateClientes = await Cliente.create(req.body)
        return res.json(respostaCreateClientes)
    } catch (error) {
        return res.json({ message: error.message })
    }

}


async function update(req, res) {
    const id = req.params.id
    try {
        const restornoDoUpdate = await Cliente.update(req.body, { where: { id: id } })

        return res.json(restornoDoUpdate)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function destroy(req, res) {
    const id = req.params.id
    try {
        const retornoDoDestroy = await Cliente.destroy({ where: { id: id } })
        return res.json(retornoDoDestroy)
    } catch (error) {
        return res.json({ message: error.message })
    }

}


module.exports = {
    index,
    create,
    update,
    destroy,
    getOne,
    trazerUsuarioGithub
}