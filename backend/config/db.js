const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // usuário do MySQL
  password: 'sua_senha',   // senha do MySQL
  database: 'clinica'      // nome do banco que você criou
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = connection;