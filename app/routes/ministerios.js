module.exports = function (app) {
    app.get('/ministerios', function (req, res) {
        res.render('ministerios/lista');
    });
}