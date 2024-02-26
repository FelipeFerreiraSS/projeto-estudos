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

const deleteCadastro = async (id) => {
  const removedCadastro = await connection.execute('DELETE FROM cadastro WHERE id = ?', [id])
  return removedCadastro
}

const updateCadastro = async (id, cadastro) => {
  const { nome, status } = cadastro
  const updatedCadastro = await connection.execute('UPDATE cadastro SET nome = ?, status = ? WHERE id = ?', [nome, status, id])
  return updatedCadastro
}
 
module.exports ={
  getAll,
  createCadastro,
  deleteCadastro,
  updateCadastro
}