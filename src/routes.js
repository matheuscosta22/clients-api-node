const express = require('express')
const router = express.Router()

const ClientController = require('./controllers/ClientController')

router.get('/clients', ClientController.all)
router.get('/client/:id', ClientController.read)
router.post('/client', ClientController.create)
router.put('/client/:id', ClientController.update)
router.delete('/client/:id', ClientController.delete)

module.exports = router