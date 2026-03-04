import express from 'express';

const app = express();


app.get("/clientes", (req, res) => {
    res.send("Olá, Mundo")
    
})

app.listen(3000, () => {   
    console.log('Servidor rodando na porta 3000');
} )