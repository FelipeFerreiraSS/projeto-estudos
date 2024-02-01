const connection = require('./connection')

const getAll = async () =>{
  const [cadastro] = await connection.execute('SELECT * FROM cadastro')
  return cadastro
}

module.exports ={
  getAll
}