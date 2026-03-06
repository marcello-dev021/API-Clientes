import express from 'express'; // -> Biblioteca para rodar o servidor
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

const app = express();
app.use(express.json()) // -> Fazendo express ler json

 

app.get("/users", async (req, res) => {

  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/users", async (req, res) => {

  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email
    }
  });

  res.status(201).json(user);
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); // -> Porta que está rodando o servidor
})