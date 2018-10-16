module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var connection = app.infra.connectionFactory();
        var ministeriosBanco = app.infra.ministeriosBanco;

        ministeriosBanco.lista(connection, function (err, results) {
            res.render('ministerios/lista', { lista: results });
        });

        connection.end();
    });
}