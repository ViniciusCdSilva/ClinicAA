const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use('/api', usersRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});