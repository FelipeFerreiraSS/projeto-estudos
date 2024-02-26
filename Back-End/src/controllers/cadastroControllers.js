const cadastroModel = require('../models/cadastroModel')

const getAll = async (request, response) => {

  const cadastro = await cadastroModel.getAll()

  return response.status(200).json(cadastro)
}

const createCadastro = async (request, response) => {
  const createdCadastro = await cadastroModel.createCadastro(request.body)
  return response.status(201).json(createdCadastro)
}

const deleteCadastro =  async (request, response) => {
  const { id } = request.params

  await cadastroModel.deleteCadastro(id)

  return response.status(204).json()
}

module.exports = {
  getAll,
  createCadastro,
  deleteCadastro
}