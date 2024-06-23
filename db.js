const mysql = require('mysql2');
const bcrypt = require('bcrypt'); 
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'seu_usuario', 
    password: 'sua_senha', 
    database: 'dbpit' 
});
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
function verificarCredenciais(username, password, callback) {
    const query = 'SELECT * FROM usuarios WHERE username = ?';
    connection.query(query, [username], (err, results, fields) => {
        if (err) {
            return callback(err, null);
        }

        if (results.length === 0) {
            return callback(null, null);
        }
        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            if (result) {
                return callback(null, user);
            } else {
                return callback(null, null); 
            }
        });
    });
}
module.exports = {
    connection,
    verificarCredenciais
};
