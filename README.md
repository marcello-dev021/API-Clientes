🚀 API de Usuários - Node.js + Prisma

API REST para gerenciamento de usuários utilizando Node.js, Express.js, Prisma ORM e PostgreSQL.

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento backend, criação de APIs REST e integração com banco de dados.

Além da API, foi criada uma interface gráfica simples para enviar dados de usuários e testar a comunicação entre frontend e backend.

🖥️ Interface Gráfica

Foi desenvolvida uma interface gráfica simples utilizando:

HTML

CSS

JavaScript

A interface permite apenas:

Inserir nome

Inserir email

Enviar os dados para a API

Após o envio, a API processa a requisição e armazena os dados no banco PostgreSQL.

Essa interface foi criada apenas para fins de aprendizado, com o objetivo de demonstrar o fluxo completo:

Interface → API → Banco de Dados
🛠️ Tecnologias Utilizadas
Backend

Node.js

Express.js

Prisma ORM

PostgreSQL

Frontend

HTML

CSS

JavaScript

📂 Estrutura do Projeto
API-Clientes
│
├── prisma
│   └── schema.prisma
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── node_modules
│
├── server.js
├── package.json
└── README.md
⚙️ Instalação

Clone o repositório:

git clone https://github.com/marcello-dev021/API-Clientes.git

Entre na pasta do projeto:

cd API-Clientes

Instale as dependências:

npm install
🗄️ Configuração do Banco de Dados

Configure a variável de ambiente no arquivo .env:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/database"

Depois execute:

npx prisma migrate dev

ou

npx prisma db push
▶️ Rodando o Projeto

Inicie o servidor:

node server.js

Servidor rodando em:

http://localhost:3000
📌 Rotas da API
Buscar usuários
GET /users

Retorna todos os usuários cadastrados.

Criar usuário
POST /users

Body da requisição:

{
  "name": "Marcello",
  "email": "marcello@email.com"
}

Os dados enviados pela interface gráfica são recebidos pela API e armazenados no banco de dados.

🎯 Objetivo do Projeto

Este projeto foi criado para praticar:

Criação de APIs REST

Integração com banco de dados

Uso do Prisma ORM

Comunicação entre frontend e backend

Estruturação de projetos backend

👨‍💻 Autor

Desenvolvido por Marcello
Estudante de Sistemas de Informação e entusiasta de Desenvolvimento Full Stack

GitHub:
https://github.com/marcello-dev021
