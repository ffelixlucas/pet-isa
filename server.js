const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha
const app = express();
const port = 8000; // Altere esta linha

// Middleware para permitir CORS
app.use(cors()); // Adicione esta linha

// Middleware para parsear JSON no corpo das requisições
app.use(bodyParser.json());

// Dados simulados de produtos
let catalog = [];

// Rota para obter o catálogo de produtos
app.get('/api/catalog', (req, res) => {
    res.json(catalog);
});

// Rota para adicionar um novo produto
app.post('/api/addProduct', (req, res) => {
    const newProduct = req.body;
    catalog.push(newProduct);
    res.json({ success: true, message: 'Produto adicionado com sucesso.' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});