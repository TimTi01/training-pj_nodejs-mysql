const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'training_db',
})

connection.connect((error) => {
    if (error) {
        return console.log('Ошибка подключения к БД: ', error.message);
    } else {
        return console.log('Подключение к БД успешно!');
    }
})

module.exports = connection