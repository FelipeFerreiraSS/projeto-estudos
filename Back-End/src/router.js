const express = require('express')
const cadastroControllers = require('./controllers/cadastroControllers')
const cadastroMiddlewares = require('./middlewares/cadastroMiddlewares')

const router = express.Router()

router.get('/cadastro', cadastroControllers.getAll)
router.post('/cadastro', cadastroMiddlewares.validateBody, cadastroControllers.createCadastro)
router.delete('/cadastro/:id', cadastroControllers.deleteCadastro)

module.exports = router