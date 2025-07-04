# Payfy User API

API REST para gerenciamento de usuários e suas configurações, desenvolvida como parte do Desafio Técnico Payfy.

---

## 💡 Visão Geral

Esta API permite criar e gerenciar usuários, bem como definir configurações específicas para cada usuário, utilizando banco de dados SQLite para persistência leve e eficiente.

---

## 🚀 Funcionalidades

- **Criar usuários** com validação para idade mínima de 18 anos.
- **Criar configurações de usuário** armazenadas em tabela separada.
- **Listar usuários** junto com suas configurações.
- Modelo de dados aderente ao desafio:
  - Usuário: `nome` (string), `idade` (inteiro), `email` (string, único)
  - Configuração: `tema` (`dark`, `medium` ou `light`), `notificacoes_email` (booleano)

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite3
- npm (gerenciador de pacotes)

---

## 📋 Modelos de Dados

### Usuário

| Campo | Tipo    | Observações                  |
|-------|---------|-----------------------------|
| nome  | String  | Obrigatório                 |
| idade | Inteiro | Deve ser maior ou igual a 18 |
| email | String  | Obrigatório e único          |

### Configuração de Usuário

| Campo             | Tipo     | Observações                      |
|-------------------|----------|---------------------------------|
| user_id           | Inteiro  | Chave estrangeira para Usuário  |
| tema              | String   | Apenas `dark`, `medium` ou `light` |
| notificacoes_email | Booleano | Indica se notificações por email estão ativadas |

<<<<<<< HEAD
<<<<<<< HEAD

### ESPERO QUE GOSTEM!
=======

=======

ESPERO QUE GOSTEM!

