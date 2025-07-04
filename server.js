const express = require('express');
const db = require('./database');
const app = express();
app.use(express.json());

// Middleware simples para validação idade
function checkAge(req, res, next) {
  const { idade } = req.body;
  if (idade < 18) {
    return res.status(400).json({ error: 'Usuário deve ter 18 anos ou mais.' });
  }
  next();
}

// Rota criar usuário
app.post('/users', checkAge, (req, res) => {
  const { nome, idade, email } = req.body;
  if (!nome || !idade || !email) {
    return res.status(400).json({ error: 'Campos nome, idade e email são obrigatórios.' });
  }

  const stmt = db.prepare('INSERT INTO users (nome, idade, email) VALUES (?, ?, ?)');
  stmt.run(nome, idade, email, function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint')) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, nome, idade, email });
  });
  stmt.finalize();
});

// Rota criar configuração usuário
app.post('/user-configs', (req, res) => {
  const { user_id, tema, notificacoes_email } = req.body;

  if (!user_id || !tema || notificacoes_email === undefined) {
    return res.status(400).json({ error: 'Campos user_id, tema e notificacoes_email são obrigatórios.' });
  }
  if (!['dark', 'medium', 'light'].includes(tema)) {
    return res.status(400).json({ error: 'Tema inválido. Use dark, medium ou light.' });
  }

  // Verificar se usuário existe
  db.get('SELECT * FROM users WHERE id = ?', [user_id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Usuário não encontrado.' });

    const stmt = db.prepare(`INSERT INTO user_configs (user_id, tema, notificacoes_email) VALUES (?, ?, ?)`);
    stmt.run(user_id, tema, notificacoes_email ? 1 : 0, function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, user_id, tema, notificacoes_email });
    });
    stmt.finalize();
  });
});

// Rota listar usuários (com configurações)
app.get('/users', (req, res) => {
  const sql = `
    SELECT u.id, u.nome, u.idade, u.email,
      uc.tema, uc.notificacoes_email
    FROM users u
    LEFT JOIN user_configs uc ON u.id = uc.user_id
  `;

  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    // Agrupa configurações por usuário
    const users = rows.map(r => ({
      id: r.id,
      nome: r.nome,
      idade: r.idade,
      email: r.email,
      config: r.tema ? { tema: r.tema, notificacoes_email: !!r.notificacoes_email } : null
    }));
    res.json(users);
  });
});

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
