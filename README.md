# Payfy - User API

Este projeto é um desafio técnico proposto pela Payfy. A aplicação é uma API REST simples para controle de usuários e suas configurações.

---

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- SQLite (Banco de Dados)
- Sequelize (ORM)

---

## 🗂️ Estrutura do Projeto

- `app.js` — Arquivo principal da aplicação
- `database.js` — Configuração e conexão com o banco de dados
- `models/` — Modelos do banco de dados
- `routes/` — Rotas da aplicação

---

## 📦 Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/vic1604/payfy-user-api.git
cd payfy-user-api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o projeto:**

```bash
node app.js
```
A API estará rodando em http://localhost:3000

## 📌 Rotas Disponíveis

### ➕ Criar Usuário  
**POST** `/usuarios`  

**Body JSON Exemplo:**  

```json
{
  "nome": "João",
  "idade": 25,
  "email": "joao@email.com"
}

### 📋 Listar Usuários  
**GET** `/usuarios`  

---

## ✅ Requisitos Atendidos

✔️ Repositório público e acessível  
✔️ API para criação de usuário (com validação de idade)  
✔️ API para criação de configuração de usuário em tabela separada  
✔️ Listagem de usuários  
✔️ Estrutura simples e funcional  

---

## 💡 Assunções Técnicas

Optei por usar Node.js e Express, tecnologias com as quais estou mais familiarizado, garantindo agilidade na entrega e fácil entendimento.

O banco de dados usado foi SQLite, por ser leve e fácil de configurar para testes locais.

Ainda não implementei autenticação, testes automatizados ou estrutura com Design Patterns avançados, mas estou aberto a aprimorar o projeto conforme necessário.

---

## 🧪 Próximos Passos (Melhorias Futuras)

- Implementar testes automatizados com Jest  
- Melhorar a documentação das rotas (Swagger ou Postman)  
- Adicionar autenticação para rotas restritas  
- Refatorar o código aplicando Design Patterns como Repository ou Service  

## 🙋‍♂️ Contato

Em caso de dúvidas ou sugestões, fique à vontade para entrar em contato!

