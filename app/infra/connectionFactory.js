var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'church-db.c00pmtvccztp.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'church',
    password: 'church123',
    database: 'church_db'
});

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'church_db'
// });

// function createDBConnection() {
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'church_db',
//         port: '27017'
//     });
// }

function createDBConnection() {
    return con;
}

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});



module.exports = function () {
    return createDBConnection;
}