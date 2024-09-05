require('dotenv').config();
// dbconfig.js
const sql = require('mssql');

// Configuração para a conexão com o banco de dados Azure SQL
const config = {
    user: process.env.USER, // Substitua pelo seu usuário do Azure SQL
    password: process.env.PASSWORD, // Substitua pela sua senha
    server: process.env.SERVER, // Substitua pelo nome do seu servidor
    database: process.env.DATABASE, // Substitua pelo nome do seu banco de dados
    options: {
        encrypt: true, // Necessário para Azure SQL
        enableArithAbort: true,
    },
};

// Função para conectar ao banco de dados
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Conectado ao banco de dados Azure SQL');
        return pool;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados', err);
        throw err;
    }
}

module.exports = {
    sql,
    connectToDatabase,
};