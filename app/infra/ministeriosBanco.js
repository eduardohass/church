function MinisteriosDAO(connection) {
    this._connection = connection;
}

MinisteriosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from ministerio', callback);
}

module.exports = function () {
    return MinisteriosDAO;
}

// module.exports = function () {
//     return function (connection) {
//         this.lista = function (callback) {

//         }
//         console.log(this);
//         return this;
//     }
// }