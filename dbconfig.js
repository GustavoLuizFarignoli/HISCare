// dbconfig.js
const sql = require('mssql');

// Configuração para a conexão com o banco de dados Azure SQL
const config = {
    user: 'seu-usuario', // Substitua pelo seu usuário do Azure SQL
    password: 'sua-senha', // Substitua pela sua senha
    server: 'crudgustavosql.database.windows.net', // Substitua pelo nome do seu servidor
    database: 'hiscaresql', // Substitua pelo nome do seu banco de dados
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