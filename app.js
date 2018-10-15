var app = require('./config/express')();
var rotasMinisterios = require('./app/routes/ministerios')(app);

app.listen(3000, function(){
    console.log('servidor rodando');
});