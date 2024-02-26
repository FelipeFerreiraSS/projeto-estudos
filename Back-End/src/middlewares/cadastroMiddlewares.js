const validateNome = (request, response, next) => {
  const { body } = request

  if (body.nome === undefined){
    return response.status(400).json({ menssage: 'O campo "nome" é obrigatório!' })
  }

  if (body.nome === ''){
    return response.status(400).json({ menssage: 'O campo "nome" não pode ser vazio!' })
  }

  next()
}

const validateStatus = (request, response, next) => {
  const { body } = request

  if (body.status === undefined){
    return response.status(400).json({ menssage: 'O campo "status" é obrigatório!' })
  }

  if (body.status === ''){
    return response.status(400).json({ menssage: 'O campo "status" não pode ser vazio!' })
  }

  next()
}

module.exports = {
  validateNome,
  validateStatus
}