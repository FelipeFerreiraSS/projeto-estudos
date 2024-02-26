const express = require('express')
const cadastroControllers = require('./controllers/cadastroControllers')

const router = express.Router()

router.get('/cadastro', cadastroControllers.getAll)
router.post('/cadastro', cadastroControllers.createCadastro)

module.exports = router