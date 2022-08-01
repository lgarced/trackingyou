const sql = require('mysql2')

const connection = sql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'imroot',
        database:'employees'
    }
)

connection.connect(error => {
    if (error) throw error
}
)

module.exports = connection