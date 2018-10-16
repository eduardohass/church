module.exports = function(){
    this.lista = function(connection, callback){
        connection.query('select * from ministerio', callback);
    }
    return this;
}