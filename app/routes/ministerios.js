module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        var connection = app.infra.connectionFactory();
        var ministeriosBanco = new app.infra.ministeriosBanco(connection);

        ministeriosBanco.lista(function (err, results) {
            res.render('ministerios/lista', { lista: results });
        });

        connection.end();
    });

    app.get('ministerios/remove', function(){

        var connection = app.infra.connectionFactory;
        var ministeriosBanco = app.infra.ministeriosBanco;
        var ministerio = ministeriosBanco.carrega(connection,id,callback);
    
        if(ministerio){
            ministeriosBanco.remove(connection,ministerio,callback);
        }
    
    });
}