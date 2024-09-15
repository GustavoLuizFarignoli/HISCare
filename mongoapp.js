const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Inicializando o app
const app = express();

// Middleware
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://gustavofarignoli:SQmSzBvJfmO0lnQn@hiscare.x1hql.mongodb.net/?retryWrites=true&w=majority&appName=HISCare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.log('Erro ao conectar no MongoDB:', err);
});

// Importando o modelo User
const User = require('./models/User');

// Rota de teste
app.get('/', (req, res) => {
    res.send('API CRUD com Node.js e MongoDB');
});

// CREATE: Criar um novo usuário
app.post('/users', async (req, res) => {
    const { name, email, age, sexo, altura, peso, telefone } = req.body;
    try {
        const newUser = new User({ name, email, age, sexo, altura, peso, telefone });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

// READ: Listar todos os usuários
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao buscar usuários' });
    }
});

// READ: Buscar um usuário pelo ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao buscar usuário' });
    }
});

// UPDATE: Atualizar um usuário pelo ID
app.put('/users/:id', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, age }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
});

// DELETE: Remover um usuário pelo ID
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário removido com sucesso' });
    } catch (err) {
        res.status(400).json({ error: 'Erro ao remover usuário' });
    }
});

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
