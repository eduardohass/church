module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var connection = app.infra.connectionFactory();
        var ministeriosBanco = new app.infra.MinisteriosDAO(connection);

        ministeriosBanco.lista(function (err, results) {
            res.render('ministerios/lista', { lista: results });
        });

        connection.end();
    });
}