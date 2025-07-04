const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite' // banco SQLite no arquivo mydb.sqlite
  },
  useNullAsDefault: true
});

// Criar tabela users se não existir
knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    console.log("Criando tabela 'users'...");
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.integer('idade').notNullable();
      table.string('email').notNullable();
    });
  } else {
    console.log("Tabela 'users' já existe.");
  }
});

module.exports = knex;
