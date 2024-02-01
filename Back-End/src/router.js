const express = require('express')
const cadastroControllers = require('./controllers/cadastroControllers')

const router = express.Router()

router.get('/cadastro', cadastroControllers.getAll)

module.exports = router