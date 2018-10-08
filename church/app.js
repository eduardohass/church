var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/ministerios', function(req, res){
    console.log('listando ministérios...');
    res.render('ministerios/lista');
})

app.listen(3000, function(){
    console.log('servidor rodando');
});