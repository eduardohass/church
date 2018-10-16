var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'church_db'
    });
}

module.exports = function(){
    return createDBConnection;
}