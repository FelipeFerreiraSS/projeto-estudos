const express = require('express')
const cadastroControllers = require('./controllers/cadastroControllers')
const cadastroMiddlewares = require('./middlewares/cadastroMiddlewares')

const router = express.Router()

router.get('/cadastro', cadastroControllers.getAll)
router.post('/cadastro', cadastroMiddlewares.validateNome, cadastroControllers.createCadastro)
router.delete('/cadastro/:id', cadastroControllers.deleteCadastro)
router.put('/cadastro/:id', cadastroMiddlewares.validateNome, cadastroMiddlewares.validateStatus, cadastroControllers.updateCadastro)

module.exports = router