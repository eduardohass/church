module.exports = function () {
    return function (connection) {
        this.lista = function (callback) {
            connection.query('select * from ministerio', callback);
        }
        console.log(this);
        return this;
    }
}