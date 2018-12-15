module.exports = function (app) {
    
    var listaMinisterios = function (req, res) {
        var connection = app.infra.connectionFactory();
        var ministeriosDAO = new app.infra.MinisteriosDAO(connection);

        ministeriosDAO.lista(function (err, results) {
            res.render('ministerios/lista', { lista: results });
        });

        connection.end();
    };
    
    app.get('/ministerios', listaMinisterios);

    app.get('/ministerios/form', function (req, res) {
        res.render('ministerios/form');
    });

    app.post('/ministerios/salva', function (req, res) {
        var ministerio = req.body;
        var connection = app.infra.connectionFactory();
        var ministeriosDAO = new app.infra.MinisteriosDAO(connection);
        ministeriosDAO.salva(ministerio, function(erros, resultados){
            res.redirect('/ministerios');
        });
    });
}