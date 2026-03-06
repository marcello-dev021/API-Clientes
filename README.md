# 🚀 API de Usuários - Node.js + Prisma

API REST simples para gerenciamento de usuários utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**.

Este projeto foi desenvolvido com o objetivo de praticar **desenvolvimento backend**, **integração com banco de dados** e **criação de APIs REST**.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* JavaScript (ES Modules)

---

## 📂 Estrutura do Projeto

```
API-Clientes
│
├── prisma
│   └── schema.prisma
│
├── node_modules
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/API-Clientes.git
```

Entre na pasta do projeto:

```bash
cd API-Clientes
```

Instale as dependências:

```bash
npm install
```

---

## 🗄️ Configuração do Banco de Dados

Configure a variável de ambiente no arquivo **.env**:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/database"
```

Depois execute:

```bash
npx prisma migrate dev
```

ou

```bash
npx prisma db push
```

---

## ▶️ Rodando o Projeto

Inicie o servidor:

```bash
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 📌 Rotas da API

### Buscar usuários

```
GET /users
```

Retorna todos os usuários cadastrados.

---

### Criar usuário

```
POST /users
```

Body:

```json
{
  "name": "Marcello",
  "email": "marcello@email.com"
}
```

Resposta:

```json
{
  "id": 1,
  "name": "Marcello",
  "email": "marcello@email.com"
}
```

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para praticar:

* Criação de APIs REST
* Integração com banco de dados
* Uso do Prisma ORM
* Estruturação de projetos backend

---

## 👨‍💻 Autor

Desenvolvido por **Marcello**
Estudante de **Sistemas de Informação** e entusiasta de **Desenvolvimento Full Stack**.

GitHub: https://github.com/seu-usuario
