const Cliente = require("../models/Cliente")

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
        const restornoDoUpdate = await Cliente.update(req.body,  { where: {id: id} })

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
    getOne
}