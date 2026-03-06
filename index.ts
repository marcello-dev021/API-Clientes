import express from 'express'; // -> Biblioteca para rodar o servidor

const app = express();
app.use(express.json()) // -> Fazendo express ler json

let clientes = []   

app.get("/clientes", (req, res) => { // -> Rota para buscar resposta 

    res.status(200).json(clientes)
})


app.post("/clientes", (req, res) => { // -> Rota para criar dados


    const { name, age } = req.body;

    // Validação simples
    if (!name || !age) {
        return res.status(400).json({
            erro: "Nome e idade são obrigatórios"
        });
    }

    const novoCliente = {
        id: clientes.length + 1,
        name,
        age
    };

    clientes.push(novoCliente);

    clientes.push(req.body) // -> Jogando as requisições para array 
    res.status(200).json(req.body) 
})


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); // -> Porta que está rodando o servidor
})