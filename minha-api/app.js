const express = require('express');
const knex = require('./database'); // importa a conexão com o banco
const app = express();

app.use(express.json());

// Rota raiz — confirmar que API está rodando
app.get('/', (req, res) => {
  res.json({ message: 'API rodando!' });
});

// Listar todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await knex('users').select();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Buscar usuário por ID
app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await knex('users').where({ id }).first();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

// Criar novo usuário
app.post('/users', async (req, res) => {
  const { nome, idade, email } = req.body;
  if (!nome || !idade || !email) {
    return res.status(400).json({ error: 'Campos nome, idade e email são obrigatórios.' });
  }
  try {
    const [id] = await knex('users').insert({ nome, idade, email });
    const newUser = await knex('users').where({ id }).first();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Atualizar usuário
app.put('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { nome, idade, email } = req.body;
  if (!nome || !idade || !email) {
    return res.status(400).json({ error: 'Campos nome, idade e email são obrigatórios.' });
  }
  try {
    const user = await knex('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    await knex('users').where({ id }).update({ nome, idade, email });
    const updatedUser = await knex('users').where({ id }).first();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Deletar usuário
app.delete('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await knex('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    await knex('users').where({ id }).del();
    res.json({ message: `Usuário ${id} deletado` });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

// Iniciar servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
