module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'church_db'
        });

        connection.query('select * from ministerio', function (err, results) {
            res.render('ministerios/lista', {lista: results});
        });

        connection.end();
    });
}