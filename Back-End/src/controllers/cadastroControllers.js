const cadastroModel = require('../models/cadastroModel')

const getAll = async (request, response) => {

  const cadastro = await cadastroModel.getAll()

  return response.status(200).json(cadastro)
}

module.exports = {
  getAll
}