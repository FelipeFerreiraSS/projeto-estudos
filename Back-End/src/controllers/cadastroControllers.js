const cadastroModel = require('../models/cadastroModel')

const getAll = async (request, response) => {

  const cadastro = await cadastroModel.getAll()

  return response.status(200).json(cadastro)
}

const createCadastro = async (request, response) => {
  const createdCadastro = await cadastroModel.createCadastro(request.body)
  return response.status(201).json(createdCadastro)
}

module.exports = {
  getAll,
  createCadastro
}