const connection = require('./connection')

const getAll = async () =>{
  const [cadastro] = await connection.execute('SELECT * FROM cadastro')
  return cadastro
}

const createCadastro = async (cadastro) => {
  const { nome } = cadastro

  const dateUTC = new Date(Date.now()).toUTCString()

  const [createdCadastro] = await connection.execute('INSERT INTO cadastro(nome, status, created_at) VALUE (?, ?, ?)', [nome, 'Ativo', dateUTC])

  return {insertId: createdCadastro.insertId}
}

module.exports ={
  getAll,
  createCadastro
}