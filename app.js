// app.js
const express = require('express');
const { sql, connectToDatabase } = require('./dbconfig');

const app = express();
app.use(express.json()); // Para lidar com requisições JSON

// Rota inicial (teste)
app.get('/', (req, res) => {
    res.send('API CRUD com Azure SQL');
});

// Criar um novo registro (Create)
app.post('/items', async (req, res) => {
    const { name, description } = req.body;

    try {
        const pool = await connectToDatabase();
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('description', sql.NVarChar, description)
            .query('INSERT INTO Items (Name, Description) VALUES (@name, @description)');

        res.status(201).json({ message: 'Item criado com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao criar item' });
    }
});

// Ler todos os registros (Read)
app.get('/items', async (req, res) => {
    try {
        const pool = await connectToDatabase();
        const result = await pool.request().query('SELECT * FROM Items');
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar itens' });
    }
});

// Atualizar um registro (Update)
app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const pool = await connectToDatabase();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('description', sql.NVarChar, description)
            .query('UPDATE Items SET Name = @name, Description = @description WHERE Id = @id');

        res.status(200).json({ message: 'Item atualizado com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao atualizar item' });
    }
});

// Deletar um registro (Delete)
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await connectToDatabase();
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Items WHERE Id = @id');

        res.status(200).json({ message: 'Item deletado com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao deletar item' });
    }
});

// Configurando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
