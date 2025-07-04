# Payfy User API

API REST simples para gerenciamento de usuários e suas configurações.

## Como rodar

1. Clone o repositório
2. Rode `npm install` para instalar dependências
3. Execute `npm start` para iniciar o servidor
4. Acesse `http://localhost:3000`

## Rotas

- POST `/users`: criar usuário (nome, idade >=18, email)
- POST `/user-configs`: criar configuração (user_id, tema, notificacoes_email)
- GET `/users`: listar usuários com suas configurações

## Requisitos

- Node.js instalado (versão >= 16)

## Como subir no GitHub

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Projeto base Payfy User API"
git branch -M main
git remote add origin https://github.com/seu-usuario/payfy-user-api.git
git push -u origin main
```

Troque `seu-usuario` pelo seu usuário real do GitHub.
