var dbConnection = require('../infra/dbConnection');

module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var mysql = require('mysql');
        var connection = dbConnection();

        connection.query('select * from ministerio', function (err, results) {
            res.render('ministerios/lista', {lista: results});
        });

        connection.end();
    });
}