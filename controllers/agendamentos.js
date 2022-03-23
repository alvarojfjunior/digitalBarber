const Agendamento = require("../models/Agendamento")
const axios = require('axios').default;

//index ou getAll
async function index(req, res) {
    try {
        const listaAgendamentos = await Agendamento.findAll();
        return res.json(listaAgendamentos)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function getOne(req, res) {
    const id = req.params.id
    try {
        const retornoDoAgendamento = await Agendamento.findByPk(id)
        return res.json(retornoDoAgendamento)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function create(req, res) {
    try {
        const respostaCreateAgendamentos = await Agendamento.create(req.body)
        return res.json(respostaCreateAgendamentos)
    } catch (error) {
        return res.json({ message: error.message })
    }

}


async function update(req, res) {
    const id = req.params.id
    try {
        const restornoDoUpdate = await Agendamento.update(req.body, { where: { id: id } })

        return res.json(restornoDoUpdate)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

async function destroy(req, res) {
    const id = req.params.id
    try {
        const retornoDoDestroy = await Agendamento.destroy({ where: { id: id } })
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