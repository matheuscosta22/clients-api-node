const ClientService = require('../services/ClientService')

module.exports = {
    all: async (req, res) => {
        let json = { error: '', result: [] }

        let clients = await ClientService.all()

        for (let i in clients) {
            json.result.push({
                id: clients[i].id,
                name: clients[i].name,
                email: clients[i].email
            })
        }
        res.json(json)
    },

    read: async (req, res) => {
        let json = { error: '', result: [] }

        let id = req.params.id
        let client = await ClientService.read(id)

        if (client) {
            json.result = client
        }
        res.json(json)
    },

    create: async (req, res) => {
        let json = { error: '', result: [] }

        let name = req.body.name
        let email = req.body.email

        if (name && email) {
            let id = await ClientService.create(name, email)
            json.result = {
                id: id,
                name,
                email
            }
        } else {
            json.error = 'unsent fields'
        }
        res.json(json)
    },

    update: async (req, res) => {
        let json = { error: '', result: [] }

        let id = req.params.id
        let name = req.body.name
        let email = req.body.email

        if (id || name || email) {
            await ClientService.update(id, name, email)
            json.result = {
                id,
                name,
                email
            }
        } else {
            json.error = 'unsent fields'
        }
        res.json(json)
    },
  
    delete: async (req, res) => {
        let json = { error: '', result: [] }

        let id = req.params.id
        if (id) {
            await ClientService.delete(id)

            res.json(json)
        }else {
            json.error = 'not found'
        }
    },
}