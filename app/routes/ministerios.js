module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var connection = app.infra.connectionFactory();

        connection.query('select * from ministerio', function (err, results) {
            res.render('ministerios/lista', { lista: results });
        });

        connection.end();
    });
}