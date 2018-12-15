function MinisteriosDAO(connection) {
    this._connection = connection;
}

MinisteriosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from ministerio', callback);
}

MinisteriosDAO.prototype.salva = function (ministerio, callback) {
    this._connection.query('insert into ministerio set ?', ministerio, callback);
}

module.exports = function () {
    return MinisteriosDAO;
};
