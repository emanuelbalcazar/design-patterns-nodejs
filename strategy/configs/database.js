// Database log implementation, this is Strategy B.
exports.log = function(message) {
    console.log('Persistiendo ' + message + ' en la base de datos.');
};

exports.target = function() {
    console.log('Base de Datos');
};
